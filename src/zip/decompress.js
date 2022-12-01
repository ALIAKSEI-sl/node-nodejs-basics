import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { createWriteStream, createReadStream } from 'node:fs';
import { createUnzip } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    const srcFile = `${__dirname}/files/fileToCompress.txt`;
    const srcFileZip = `${__dirname}/files/archive.gz`;
    const readableStream = createReadStream(srcFileZip);
    const writeableStream = createWriteStream(srcFile);
    const unzip = createUnzip();

    readableStream.pipe(unzip).pipe(writeableStream);
};

decompress();