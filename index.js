import { outputFile } from "fs-extra";
import axios from "axios";
import { join, resolve } from "path";
import { deepClone } from "./utils/index.js"

const __dirname = resolve();

const root_url = "https://www.zhihu.com/people/maluyelang666/posts";

const once_req = async () => {
    let data = deepClone(await axios({
        method: "get",
        url: root_url
    }));
    to_file("temp/once_file.json", data, "finish once req and save in temp/once_file.json");
    //await fs.writeJson("temp/once_file.json", JSON.stringify(data));
    //console.log(Object.keys(data));
}

const to_file = async (_path, data, mes = "save a file") => {
    try {
        let path = join(__dirname, _path);
        await outputFile(path, data);
        console.log(`hint :${mes}`);
    } catch (err) {
        console.error(err);
    }
}
once_req();