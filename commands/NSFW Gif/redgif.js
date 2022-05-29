const discord = require('discord.js');
const redgifs = require('redgifs');

module.exports = {
    name: "redgif",
    category: "NSFW Gif",
    run: async (client, message, args) => {

        var errMessage = "This is not an NSFW Channel";
        if (!message.channel.nsfw) {
            message.react('💢');

            return message.reply(errMessage)
                .then(msg => {
                    msg.delete({ timeout: 3000 })
                })
        }
        return message.reply("Command under construction!")
    }
}