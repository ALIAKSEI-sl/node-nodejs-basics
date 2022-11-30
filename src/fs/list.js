import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { readdir } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    const srcFiles = `${__dirname}/files`;    
    const errorMessage = 'FS operation failed';    

    try {
        const dirFiles = await readdir(srcFiles);
        console.log(dirFiles);
    } catch(error) {
        throw new Error(errorMessage);
    }
};

list();