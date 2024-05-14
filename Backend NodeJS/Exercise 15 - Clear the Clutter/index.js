import fs from "fs/promises";
import fsn from "fs";
import path from "path";
console.log(fs);

const basePath = "/Users/nirbhikkakkar/Documents/GitHub/MERN-Stack/Backend NodeJS/Exercise 15 - Clear the Clutter";
let files = await fs.readdir(basePath);
// console.log(files)

// let extensions = [];
for (const item of files) {
    console.log("Running for", item)
    let ext = item.split(".")[item.split(".").length - 1];
    // console.log(ext);
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {
        if (fsn.existsSync(path.join(basePath, ext))) {
            //Move the file to this directory if it is not js and json
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item));
        }
        else {
            fs.mkdir(ext);
        }
    }
    // console.log(item);
}