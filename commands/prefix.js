const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "setprefix",
    async run (client, message, args) {
        //Константы
        let prefix = await db.get(`prefix_${message.guild.id}`)
        const errorLength = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Ошибка!')
            .setDescription('Префикс не может быть длиннее трёх символов.')
        const errorSpace = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Ошибка!')
            .setDescription('Префикс не может содержать в себе пробелы.')
        //дико нахимичил, но для красоты, ни более
        if(prefix === "!") var newprefix = "."
        if(prefix === ".") var newprefix = "!"
        else var newprefix = "?"
        const commandExample = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Пример использования команды')
            .setDescription(prefix + 'setprefix ' + newprefix)
        const errorPermissions = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Ошибка!')
            .setDescription('У вас недостаточно прав!')

        if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send(errorPermissions);

        if(!args[0]) return message.channel.send(commandExample);

        if(args[1]) return message.channel.send(errorSpace);
        
        if(args[0].length > 3) return message.channel.send(errorLength)

        db.set(`prefix_${message.guild.id}`, args[0])

        message.channel.send(`Префикс изменён на + **${args[0]}**`)
    }
}