module.exports={
    name:'ping',
    description: "ping",
    execute(message){
        message.channel.send(`${Date.now() - message.createdTimestamp}ms`);
    }
};