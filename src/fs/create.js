import { open, writeFile } from "node:fs/promises";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const create = async () => {
  try {
    const filepath = path.join(__dirname, "./files/fresh.txt")

    let file = writeFile(filepath, "I am fresh and young", {
      flag: "wx+",
    });
    file.catch(() => {
      throw new Error("FS operation failed");
    });
  } catch (e) {
    console.log(e);
  }
};
create();
