const config = require('../config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

exports.command = (name) => {
    return config.prefix + name;
}

exports.splitCommand = (textContent) => {
    return new Promise(resolve => {
        if (textContent.startsWith(config.prefix)) {
            const words = textContent.split(' ');
            const cmd = words.shift();
            let params;
            if (words.length === 0) {
                params = [''];
            }
            else params = words;
            resolve([cmd, params]);
        }
    });
}