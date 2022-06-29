const discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: "pussy",
    usage: ["The genitals of a female, or a cat ```[command]```"],
    aliases: [],
    category: "NSFW",
    memberPermissions: [],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    //Settings for command
    nsfw: true,
    run: async (client, message, args) => {
        async function pussy() {
            const akanekoSan = new discord.MessageEmbed()
            akanekoSan.setTitle("The genitals of a female, or a cat.")
            akanekoSan.setColor("RANDOM")
            akanekoSan.setImage(await akaneko.nsfw.pussy());
            akanekoSan.setTimestamp()
            akanekoSan.setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
            return message.channel.send({embeds: [akanekoSan]});
        }
        pussy().catch(err => {
            if (err.name == 'Not Found') {
                return message.reply("Server Response Time Out");
            }
            else {
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
            }
        })
    }
}