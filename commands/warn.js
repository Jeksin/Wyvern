module.exports = {
    name: 'warn',
    async run(client, message, args) {
        const { errorPermissions } = require('../errors.js')

        if(!message.author.hasPermission("BAN_MEMBER")) return message.channel.send(errorPermissions)
    }
}