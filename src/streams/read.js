import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const srcFiles = `${__dirname}/files/fileToRead.txt`;
    const readStream = createReadStream(srcFiles, { encoding: 'utf8' });
    readStream.on( 'data', (chunk) => {        
        console.log(chunk);
    })
};

read();