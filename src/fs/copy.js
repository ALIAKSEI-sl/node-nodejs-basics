import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { mkdir, readdir, copyFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
    const srcFiles = `${__dirname}/files`;
    const srcFilesCopy = `${__dirname}/files_copy`;    
    const errorMessage = 'FS operation failed';
    try {
        const dirFiles = await readdir(srcFiles);
        await mkdir(srcFilesCopy);
        await Promise.all(dirFiles.map((elem) => copyFile(`${srcFiles}/${elem}`, `${srcFilesCopy}/${elem}`)));
    } catch(error) {
        throw new Error(errorMessage);
    }
};

copy();