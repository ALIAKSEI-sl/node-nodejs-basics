import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const srcFiles = `${__dirname}/files/fileToWrite.txt`;
    const wtiteStream = createWriteStream(srcFiles);
    process.stdin.on( 'data', (chunk) => {
        wtiteStream.write(chunk);        
    })
};

write();