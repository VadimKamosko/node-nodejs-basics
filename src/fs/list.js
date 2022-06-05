import { readdir } from "node:fs/promises";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const list = async () => {
  try {
    const filespath = path.join(__dirname, './files')
    fs.access(filespath, function (err) {
      if (err && err.code === "ENOENT") {
        throw new Error("FS operation failed");
      }
    });
    const files = await readdir(filespath, (err) => {
      if (err) throw new Error("FS operation failed");
    });
    for (const file of files) {
      console.log(file);
    }
  } catch (e) {
    console.log(e);
  }
};
list();
