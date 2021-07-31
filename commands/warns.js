module.exports = {
    name: 'warns',
    async run (client, message, args) {
        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;

        let warnings = await db.get(`warnings_${message.guild.id}_${user.id}`);

        if(warnings === null) warnings = 0;
        
        
        db.get(`reason_${message.guild.id}_${user.id}`, reason);
        message.channel.send(`**${user.username}** has *${warnings}* warning the reasons is ${reason}`);
    }
}