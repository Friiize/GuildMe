const { command, splitCommand } = require('./helpers');
const { menu, caracAppearance } = require('./commands');

exports.messageHandler = async (msg, client) => {
    const [cmd, params] = await splitCommand(msg.content);

    switch (cmd) {
        case command("ping"):
            msg.channel.send("pong");
            break;
        case command("menu"):
            menu(msg, client);
            break;
        case command('seek'):
            caracAppearance(msg, params, client);
            break;

    }
}

exports.errorHandler = (error) => {
    console.error(error);
}

exports.readyHandler = (client) => {
    console.log(`Logged in as ${client.user.tag}!`);
}