import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
  const filepath = path.join(__dirname, './files/fileToRead.txt')
  let data = readFile(filepath, { flag: "r+" });

  data.then((res) => console.log(res.toString()));
  data.catch(() => {
    console.log(new Error("FS operation failed"));
    process.exit(1);
  });
};
read();
