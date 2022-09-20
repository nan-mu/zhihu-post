import fs from "fs-extra";
import { load } from "cheerio";
import { join, resolve } from "path";
import { deepClone } from "./utils/index.js"
import Service from "./utils/service.js"

const __dirname = resolve();
const { outputFile, readFile, writeJSON } = fs;

const root_url = "https://www.zhihu.com/people/maluyelang666/posts";

const once_req = async () => {
    let data = deepClone(await Service({ url: root_url }));
    to_file("temp/once_file.html", data, "finish once req and save in temp/once_file.html");
}

const to_file = async (_path, data, mes = "save a file") => {
    try {
        let path = join(__dirname, _path);
        await outputFile(path, data);
        console.log(`hint: ${mes}`);
    } catch (err) {
        console.error(err);
    }
}

const load_art = async () => {
    try {
        await once_req();
        let $ = load(await readFile(join(__dirname, "temp/once_file.html"), "utf8"));
        let art_len = -1, temp = -1, reg = /\d+/;
        $(".Pagination button").each((i, elem) => {
            if (reg.test($(elem).text())) {
                temp = Number($(elem).text());
                art_len = art_len < temp ? temp : art_len;
            }
        });
    } catch (error) {
        console.error(error);
    }
}

load_art();