require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const { messageHandler, errorHandler, readyHandler } = require('./handlers');

client.on('ready', () => {
    readyHandler(client);
});

client.on('message', msg => {
    messageHandler(msg, client)
});

client.on('error', error => {
    errorHandler(error);
});

client.login(process.env.TOKEN);

