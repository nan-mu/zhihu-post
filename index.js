import fs from "fs-extra";
import { load } from "cheerio";
import { join, resolve } from "path";
import turndownService from "turndown";
import Service from "./service.js";

const __dirname = resolve();
const { outputFile, readFile } = fs;
const tds = new turndownService();

const root_url = "https://www.zhihu.com/people/maluyelang666/posts";
const art_url = "https://zhuanlan.zhihu.com/p/";
const author = root_url.replace("https://www.zhihu.com/people/", "").replace("/posts", "");

const once_req = async () => {
    try {
        let data = await Service({ url: root_url });
        await to_file("temp/once_file.html", data, "finish once req and save in temp/once_file.html");
    } catch (error) {
        console.error(error);
    }
}

const to_file = async (_path, data, mes = "save a file") => {
    try {
        let path = join(__dirname, _path);
        await outputFile(path, data);
        if (mes) console.log(`hint: ${mes}`);
    } catch (error) {
        console.error(error);
    }
}

const load_art = async () => {
    try {
        let $ = load(await readFile(join(__dirname, "temp/once_file.html"), "utf8"));
        let len = -1, temp = -1, reg = /\d+/;
        $(".Pagination button").each((i, elem) => {
            if (reg.test($(elem).text())) {
                temp = Number($(elem).text());
                len = len < temp ? temp : len;
            }
        });
        return len;
    } catch (error) {
        console.error(error);
    }
}

const get_art = async (page) => {
    try {
        let art = [], reg_1 = /"ids":\[[a-z0-9,]+\],"totals":\d+/, reg_2 = /\d{8,9}/g;
        let data = await Service({ url: `${root_url}?page=${page}` });
        await to_file("temp/t_page.html", data, `get No.${page} and save in temp/t_page.html`);
        let $ = load(await readFile(join(__dirname, "temp/t_page.html"), "utf8"));
        await to_file("temp/t_page.json", $("#js-initialData").text(), false);
        let art_id = (reg_1.exec(await readFile(join(__dirname, "temp/t_page.json"), "utf8")))[0].match(reg_2);
        let art_data, art_$, context, title;
        for (let i = 0; i < art_id.length; i++) {
            art_data = await Service({ url: `${art_url}${art_id[i]}` });
            await to_file("temp/t_page.html", art_data, false);
            art_$ = load(await readFile(join(__dirname, "temp/t_page.html"), "utf8"));
            title = art_$(".Post-Header h1").text().replace("/", "或");
            art_$ = load(art_$(".Post-RichTextContainer .css-1yuhvjn div").html());
            art_$("p").removeAttr("data-pid");
            art_$(".ztext-empty-paragraph").remove();
            art_$(".video-box span").remove();
            art_$(".video-box img").removeAttr("class");
            art_$(".video-box").removeAttr("class target data-video-id data-video-playable data-name data-poster data-lens-id");
            art_$("figure img").each((i, elem) => {
                art_$(elem).attr("str", art_$(elem).attr("data-original"));
                art_$(elem).parent("figure").before(`<img src="${art_$(elem).attr("data-original")}" />`);
                art_$(elem).parent("figure").remove();
            });
            art
            //art_$("figure").remove();
            await to_file(`public/${author}/${title}_${page}_${i}.md`, tds.turndown(art_$.html()), `found a art: ${title}_${page}_${i}.md`);
        }
    } catch (error) {
        console.error(error);
    }
}

const main = async () => {
    await once_req();
    let page_len = await load_art();
    for (let i = 1; i <= page_len; i++) {
        await get_art(i);
    }
}

main();