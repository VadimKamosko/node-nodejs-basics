import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const read = async () => {
  let readFile = path.join(__dirname, "./files/fileToRead.txt");
  let readableStream = fs.createReadStream(readFile);
  readableStream.pipe(process.stdout);
};

read();
