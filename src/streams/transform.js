import { pipeline, Transform } from 'node:stream';
import { EOL } from 'node:os';

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            const textContent = String(chunk).replace(EOL, ''); // or use string.trim()
            const arrayReverse = textContent.split('').reverse();
            const textReverse = arrayReverse.join('') + EOL; // add \n
            callback(null, textReverse);
        }
    });

    pipeline(
        process.stdin,
        reverse,
        process.stdout,
        err => {            
            console.error(`Error: ${err}`);            
        }
    );   
};

transform();