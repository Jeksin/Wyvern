const Discord = require('discord.js');
module.exports = {
    name: "help",
    description: "Help command",
    
    async run(client, message) {
        const help = new Discord.MessageEmbed()
        .setAuthor('Wyvern - Список команд.')
        .setTitle('Модераторские')
        .setField('')

        message.channel.send(help);
    }
}