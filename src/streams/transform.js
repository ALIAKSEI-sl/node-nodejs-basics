import { pipeline, Transform } from 'node:stream';
import { EOL } from 'node:os';

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            const textContent = String(chunk).replace(EOL, '');
            const arrayReverse = textContent.split('').reverse();
            const textReverse = arrayReverse.join('') + EOL;
            callback(null, textReverse);
        }
    });
    pipeline(
        process.stdin,
        reverse,
        process.stdout,
        (err) => {
            if (err) {
                console.error('Unsuccessful', err);
            } else {
                console.log('Successfully');
            }
        }
    )
    //process.stdin.pipe(reverse).pipe(process.stdout)
};

transform();