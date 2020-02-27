const Discord = require('discord.js');

exports.menu = (msg, client) => {
    const embed = (new Discord.RichEmbed())
        .setTitle('Igor tu pue du cul')
        .setAuthor('GuildMe')
        .setDescription('Un jour, Igor se leva dans la merde, et depuis, il pua.')
        .setColor(12144482)
        .setTitle('😱')
    return embed;
}