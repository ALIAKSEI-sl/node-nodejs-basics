import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    try{
    const srcFiles = `${__dirname}/files/fileToCalculateHashFor.txt`;
    const content = await readFile(srcFiles);
    const hash = createHash('sha256').update(content).digest('hex');
    console.log(hash);
    } catch(error) {
        throw error;
    }
};

calculateHash();