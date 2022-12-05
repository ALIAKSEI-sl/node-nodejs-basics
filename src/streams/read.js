import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const srcFiles = join(__dirname, 'files', 'fileToRead.txt');
    const readStream = createReadStream(srcFiles, { encoding: 'utf8' });
    readStream.on( 'data', (chunk) => {
        process.stdout.write(chunk);        
    })
};

read();