const Discord = require('discord.js');

exports.menu = (msg) => {
    const embed = (new Discord.RichEmbed())
        .setTitle('Igor tu pue du cul')
        .setAuthor('Le monde')
        .setDescription('Un jour, Igor se leva dans la merde, et depuis, il pua.')
    return embed;
}