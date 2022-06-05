import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const write = async () => {
  try {
    let writeFile = path.join(__dirname, "./files/fileToWrite.txt");
    let writeableStream = fs.createWriteStream(writeFile, {
      flags: "w",
    });
    writeableStream.on("error", () => {
      throw new Error("FS operation failed");
    });
    process.stdin.pipe(writeableStream);
  } catch (e) {
    console.log(e);
  }
};

write();
