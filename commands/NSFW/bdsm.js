const discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: "bdsm",
    category: "NSFW",
    description: "Get some bdsm",
    run: async (client, message, args) => {

        var errMessage = "This is not an NSFW Channel";
        if (!message.channel.nsfw) {
            message.react('💢');

            return message.reply(errMessage)
                .then(msg => {
                    setTimeout(() => msg.delete(), 3000);
                })
        }

        async function bdsm() {
            const akanekoSan = new discord.MessageEmbed()
            akanekoSan.setTitle("If you don't know what it is, search it up")
            akanekoSan.setColor("RANDOM")
            akanekoSan.setImage(await akaneko.nsfw.bdsm())
            akanekoSan.setTimestamp()
            akanekoSan.setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
            return message.channel.send({embeds: [akanekoSan]});
        }
        bdsm().catch(err => {
            const { errLogChannelID } = require('../../config.json');
            const channel = client.channels.cache.get(errLogChannelID)
            if(!channel) return;
            message.react('❌')
            const logMessage = new discord.MessageEmbed()
                .setTitle('Logs of CMD Errors | Crush | Broken')
                .setColor('BLUE')
                .setDescription(`${message.author.username} use CMD "***${pussy.name}***"\nFrom server: ${message.guild.name}\n${err}`)
                .setTimestamp()
            channel.send({embeds: [logMessage]})
        })
    }
}