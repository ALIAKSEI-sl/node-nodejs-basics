import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { createWriteStream, createReadStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const srcFile = `${__dirname}/files/fileToCompress.txt`;
    const srcFileZip = `${__dirname}/files/archive.gz`;
    const readableStream = createReadStream(srcFile);
    const writeableStream = createWriteStream(srcFileZip);
    const gzip = createGzip();

    readableStream.pipe(gzip).pipe(writeableStream);
};

compress();