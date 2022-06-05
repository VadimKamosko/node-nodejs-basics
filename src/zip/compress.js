import fs from "fs";
import zlib from "zlib";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const compress = async () => {
  let compFilePath = path.join(__dirname, "./files/fileToCompress.txt");
  let archivePath = path.join(__dirname, "./files/archive.gz");
  
  let readableStream = fs.createReadStream(compFilePath);

  let writeableStream = fs.createWriteStream(archivePath);

  let gzip = zlib.createGzip();

  readableStream.pipe(gzip).pipe(writeableStream);
};

compress();
