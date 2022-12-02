import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { spawn } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
    const src = `${__dirname}/files/script.js`;
    const processCh = spawn('node', [src, ...process.argv.slice(2), ...args]);

    process.stdin.on('data', mess => {
        processCh.stdin.write(mess)
    })

    processCh.stdout.on('data', chunk => {
        console.log(String(chunk))
    })
};

spawnChildProcess(['test', 'example']);