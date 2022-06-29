const discord = require('discord.js');
const redgifs = require('redgifs');

module.exports = {
    name: "redgif",
    usage: ["```[command] + [category]```"],
    aliases: [],
    category: "NSFW Gif",
    memberPermissions: [],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    //Settings for command
    nsfw: true,
    run: async (client, message, args) => {
        return message.reply("Command under construction!")
    }
}