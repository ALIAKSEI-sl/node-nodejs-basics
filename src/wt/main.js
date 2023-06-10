import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    const src = join(__dirname, 'worker.js');
    const myCpus = cpus();
    let count = 10;

    const resultWorker = await Promise.allSettled(myCpus.map(() => {
        return new Promise((resolve, rejects) => {
            const worker = new Worker(src, { workerData: count++ });
            worker.on('message', mess => resolve(mess));
            worker.on('error', mess => rejects(mess));
        });
    })
    );
    const result = resultWorker.map(({ status, value }) => {
        if (status === 'fulfilled') {
            return { status: 'resolved', data: value };
        } else {
            return { status: 'error', data: null };
        }
    })
    console.log(result)
};

performCalculations();