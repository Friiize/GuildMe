const { command, splitCommand } = require('./helpers');
const { menu } = require('./commands');

exports.messageHandler = async (msg, client) => {
    const [cmd, params] = await splitCommand(msg.content);

    switch (cmd) {
        case command("ping"):
            msg.channel.send("pong");
            break;
        case command("menu"):
            msg.channel.send(menu(msg.content, client));
            break;
        case command('seek'):
            caracAppearance(params)
            break;

    }
}

exports.errorHandler = (error) => {
    console.error(error);
}

exports.readyHandler = (client) => {
    console.log(`Logged in as ${client.user.tag}!`);
}