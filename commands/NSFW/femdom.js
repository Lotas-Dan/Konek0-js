const discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: "femdom",
    category: "NSFW",
    description: "Get some wallpapers",
    run: async (client, message, args) => {

        var errMessage = "This is not an NSFW Channel";
        if (!message.channel.nsfw) {
            message.react('💢');

            return message.reply(errMessage)
                .then(msg => {
                    msg.delete({ timeout: 3000 })
                })
        }
        async function femdom() {
            const akanekoSan = new discord.MessageEmbed()
            akanekoSan.setTitle("Female Domination?")
            akanekoSan.setColor("RANDOM")
            akanekoSan.setImage(await akaneko.nsfw.femdom())
            akanekoSan.setTimestamp()
            akanekoSan.setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
            return message.channel.send(akanekoSan);
        }
        femdom().catch(err => {
            if (err.name == 'Not Found') {
                return message.reply("Server Response Time Out");
            }
            else {
                const { errLogChannelID } = require('../../config.json');
                if(!errLogChannelID) return message.channel.send(err);
                message.react('❌')
                const logMessage = new discord.MessageEmbed()
                    .setTitle('Logs of CMD Errors | Crush | Broken')
                    .setColor('BLUE')
                    .setDescription(`${message.author.username} use CMD "***${femdom.name}***"\nFrom server: ${message.guild.name}\n${err}`)
                    .setTimestamp()
                client.channels.cache.get(errLogChannelID).send(logMessage);
            }
        })
    }
}