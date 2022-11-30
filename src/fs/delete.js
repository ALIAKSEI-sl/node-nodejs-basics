import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { rm } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    const src = `${__dirname}/files/fileToRemove.txt`;
    const errorMessage = 'FS operation failed';

    try{
        await rm(src);
    } catch(error) {
        throw new Error(errorMessage);
    }
    
};

remove();