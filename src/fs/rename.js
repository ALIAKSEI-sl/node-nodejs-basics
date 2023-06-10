import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { rename as getNewName } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    const srcWrongFile = join(__dirname, 'files', 'wrongFilename.txt');
    const srcProperFile = join(__dirname, 'files', 'properFilename.md');
    const errorMessage = 'FS operation failed';

    try {
        await getNewName(srcWrongFile, srcProperFile);
    } catch (error) {
        throw new Error(errorMessage);
    }
};

rename();