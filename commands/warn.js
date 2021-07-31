module.exports = {
    name: 'warn',
    async run(client, message, args) {
        //const { errorPermissions, warnNullArgs } = require('../errors.js')
    const Discord = require('discord.js');
    const db = require('quick.db');
    const errorPermissions = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Ошибка!')
        .setDescription('У вас недостаточно прав!')
    const warnNullArgs = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Ошибка!')
        .setDescription('как бы да, не правильно пишешь, другалёк')
    const warnedEmbed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('Предупреждение')
        .setDescription(`${args[0]} был предупреждён по причине **${args[1]}**`)
        .setFooter(`Модератор: ${message.author}`)

        if(!message.member.hasPermission("BAN_MEMBER")) return message.channel.send(errorPermissions);
        if(!args[0]) return message.channel.send(warnNullArgs);
        if(!args[1]) return message.channel.send(warnNullArgs);
        if(args[0] === !message.mentions.users.first()) return message.channel.send("sosi 4len");

        var warnings = db.get(`warnings_${message.guild.id}_${args[0]}`);
        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        var reason = args.slice(1).join(" ");
        if(warnings === null) {
            db.set(`warnings_${message.guild.id}_${args[0]}`, 1);
            //user.send(warnedEmbed)
            await message.channel.send(warnedEmbed)
        }

        if(warnings !== null){
            db.add(`warnings_${message.guild.id}_${args[0]}`, 1)
            db.set(`reason_${message.guild.id}_${args[0]}`, reason);
            //user.send(`Вы получили варн в ${message.guild.name} по причине \`${reason}\``)
            await message.channel.send(warnedEmbed)
        }
    }
}