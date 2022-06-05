import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const rename = async () => {
  try {
    const oldName = path.join(__dirname, "./files/wrongFilename.txt")
    const newname = path.join(__dirname, "./files/properFilename.md");

    fs.access(newname, function (err) {
      if (!err) {
        throw new Error("FS operation failed");
      }

      fs.rename(
        oldName,
        newname,
        (err) => {
          if (err) throw new Error("FS operation failed");
        }
      );
    });
  } catch (e) {
    console.log(e);
  }
};
rename();
