const config = require('../config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

exports.command = (name) => {
    return config.prefix + name;
}

exports.splitCommand = (textContent) => {
    if (textContent[0] === '!') {
        const words = textContent.split(' ');
        words.shift();
        console.log(words);
        if (words.length === 1) {
            return words[0];
        }
        if (words.length === 0) {
            return '';
        }
        return words;
    }
}