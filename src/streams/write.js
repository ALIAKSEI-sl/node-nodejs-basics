import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const srcFiles = join(__dirname, 'files', 'fileToWrite.txt');
    const writeStream = createWriteStream(srcFiles);
    process.stdin.on( 'data', (chunk) => {
        writeStream.write(chunk);        
    })
};

write();