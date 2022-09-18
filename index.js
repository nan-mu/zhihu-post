import fs from "fs-extra";
import { load } from "cheerio";
import { join, resolve } from "path";
import { deepClone } from "./utils/index.js"
import Service from "./utils/service.js"

const __dirname = resolve();
const { outputFile, readFile } = fs;

const root_url = "https://www.zhihu.com/people/maluyelang666/posts";

const once_req = async () => {
    let data = deepClone(await Service({ url: root_url }));
    to_file("temp/once_file.html", data, "finish once req and save in temp/once_file.html");
    //await fs.writeJson("temp/once_file.json", JSON.stringify(data));
    //console.log(Object.keys(data));
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
    //await once_req();
    let $ = load(await readFile(join(__dirname, "temp/once_file.html"), "utf8"));
    console.log(typeof $(".Pagination button").text());
}

load_art();