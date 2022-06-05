import cp from "child_process";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const spawnChildProcess = async (args) => {
    const scriptPath = path.join(__dirname, "files/script.js")
    let child = cp.fork(scriptPath,args)
};


spawnChildProcess([1,2,3,4,5,6])