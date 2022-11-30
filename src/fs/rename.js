import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { rename as getNewName } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    const srcWrongFile = `${__dirname}/files/wrongFilename.txt`;
    const srcProperFile = `${__dirname}/files/properFilename.md`;
    const errorMessage = 'FS operation failed';

    try {
        await getNewName(srcWrongFile, srcProperFile);
    } catch(er) {
        throw new Error(errorMessage);
    }
};

rename();