import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const remove = async () => {
  try {
    const filepath = path.join(__dirname, "files/fileToRemove.txt")
    fs.unlink(filepath, (err) => {
      if (err) throw new Error("FS operation failed");
      console.log("Deleted");
    });
  } catch (err) {
    console.log(err);
  }
};

remove();
