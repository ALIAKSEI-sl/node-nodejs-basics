const parseEnv = () => {
    const variablesRSS = Object.entries(process.env).reduce((ac, [key, value]) => {
        if(key.startsWith('RSS_')) {
            ac.push(`${key}=${value}`);
        }
        return ac;       
    }, []);
    console.log(variablesRSS.join('; '));
};

parseEnv();