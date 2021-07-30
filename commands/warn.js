module.exports = {
    name: 'warn',
    async run(client, message, args) {
        const { errorPermissions, warnNullArgs } = require('../errors.js')

        if(!message.member.hasPermission("BAN_MEMBER")) return message.channel.send(errorPermissions);
        if(!args[0]) return message.channel.send(warnNullArgs);
    }
}