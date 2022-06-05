import fs from "fs";
import zlib from "zlib";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const decompress = async () => {
  let archivePath = path.join(__dirname, "./files/archive.gz");
  let decompFilePath = path.join(__dirname, "./files/fileToCompress.txt");

  let readableStream = fs.createReadStream(archivePath);

  readableStream.on('error',(e)=>{
      console.log('Error');
      process.exit(1);
  })

  let writeableStream = fs.createWriteStream(decompFilePath);

  let gzip = zlib.Gunzip();

  readableStream.pipe(gzip).pipe(writeableStream);
};
decompress();
