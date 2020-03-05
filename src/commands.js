const Discord = require('discord.js');

exports.menu = (msg, client) => {
    const embed = (new Discord.RichEmbed())
        .setTitle('Welcome to the GuildMe User Guide !')
        .setDescription('This bot is for both players and Guild Recruters. He will help you to find the right guild or player by using a powerful filter system.\n To get started write "!gm Help"')
        .setColor(12144482)
        .setFooter('Ver. 0.0.6 😱')
        .setImage(client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setURL()
        .setTimestamp()
    return msg.channel.send(embed);
}

exports.caracAppearance = (msg, params) => {
    const pseudo = params[0];
    const realm = params[1];

    return msg.channel.send(pseudo, realm);
} 