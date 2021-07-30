const Discord = require('discord.js');

const errorPermissions = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Ошибка!')
    .setDescription('У вас недостаточно прав!')

const warnNullArgs = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Ошибка!')
    .setDescription('как бы да, не правильно пишешь, другалёк')