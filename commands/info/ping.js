module.exports = {
    name: "ping",
    usage: ["Current bot ping ```[command]```"],
    aliases: ["latency"],
    category: "info",
    memberPermissions: [],
    botPermissions: ["SEND_MESSAGES"],
    //Settings for command
    nsfw: false,
    run: async (client, message, args) => {
        await message.channel.send(`🏓 Pinging....`).then((msg) => {
            msg.edit(`🏓 Pong!
            API Latency is ${Math.round(client.ws.ping)}ms`);
        })
    }
}
