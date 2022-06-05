import fs from "fs";
import crypto from 'crypto'
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const calculateHash = async () => {
  // Write your code here
  try {
    const hashFile = path.join(__dirname, './files/fileToCalculateHashFor.txt')
    fs.readFile(hashFile, "utf8", (err, data) => {
      if (err) throw new Error("Error");
      let hash = crypto.createHash("sha256",'rsschool').update(data).digest("hex");
      console.log(hash)
    });  
  } catch (e) {
    console.log(e);
  }
};

calculateHash()