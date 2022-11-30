import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { readFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const src = `${__dirname}/files/fileToRead.txt`;
    const errorMessage = 'FS operation failed';

    try {
        const content = await readFile(src, { encoding: 'utf8' });
        console.log(content);
    } catch (error) {
        throw new Error(errorMessage);
    }
};

read();