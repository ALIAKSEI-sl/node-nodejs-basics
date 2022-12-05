import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createWriteStream, createReadStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const srcFile = join(__dirname, 'files', 'fileToCompress.txt');
    const srcFileZip = join(__dirname, 'files', 'archive.gz');
    const readableStream = createReadStream(srcFile);
    const writeableStream = createWriteStream(srcFileZip);
    const gzip = createGzip();

    readableStream.pipe(gzip).pipe(writeableStream);
};

compress();