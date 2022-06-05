import { readdir, copyFile } from "node:fs/promises";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const copy = async () => {
  try {
    const filespath = path.join(__dirname, './files')
    const copyFilsePath = path.join(__dirname, './files_copy');
    console.log(copyFilsePath);
    fs.access(filespath, function (err) {
      if (err && err.code === "ENOENT") {
        throw new Error("FS operation failed");
      }

      fs.mkdir(copyFilsePath, (err) => {
        if (err) throw new Error("FS operation failed");
      });
    });
    const files = await readdir(filespath);
    for (const file of files) {
      copyFile(
        `${filespath}/${file}`,
        `${copyFilsePath}/${file}`,
        fs.constants.COPYFILE_EXCL
      ).catch((e) => {
        throw new Error("FS operation failed");
      });
    }
  } catch (err) {
    console.error(err);
  }
};

copy();
