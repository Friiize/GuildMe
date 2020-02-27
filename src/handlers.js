const { command, splitCommand } = require('./helpers');
const { menu } = require('./commands');

exports.messageHandler = (msg, client) => {
    splitCommand(msg.content);
    switch (msg.content) {
        case command("ping"):
            msg.channel.send("pong");
            break;
        case command("menu"):
            msg.channel.send(menu(msg.content, client));
            break;

    }
}

exports.errorHandler = (error) => {
    console.error(error);
}

exports.readyHandler = (client) => {
    console.log(`Logged in as ${client.user.tag}!`);
}