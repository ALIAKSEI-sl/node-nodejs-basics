import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { writeFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    const src = join(__dirname, 'files', 'fresh.txt');
    const content = 'I am fresh and young';
    const errorMessage = 'FS operation failed';

    try {
        await writeFile(src, content, { flag: 'wx' }); //'wx': Like 'w' but fails if the path exists
    } catch (error) {
        throw new Error(errorMessage);
    }
};

create();