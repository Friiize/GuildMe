const config = require('../config.json');

exports.command = (name) => {
    return config.prefix + name;
}

exports.splitCommand = (textContent) => {
    return new Promise((resolve, reject) => {
        if (textContent.startsWith(config.prefix)) {
            const params = textContent.split(' ');
            const cmd = params.shift();
            resolve([cmd, params]);
        }
        // reject(new Error("content passed is not a command"));
    });
}