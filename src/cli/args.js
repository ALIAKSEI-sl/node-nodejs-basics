const parseArgs = () => {
    const userArg = process.argv.slice(2);
    const formatArray = userArg.reduce((ac, arg, index, array) => {
        if (arg.startsWith('--')) {
            const formatArg = `${arg.slice(2)} is ${array[index + 1]}`;
            ac.push(formatArg);
        }
        return ac;
    }, []);
    console.log(formatArray.join(', '));
};

parseArgs();