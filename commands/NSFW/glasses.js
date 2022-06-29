const discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: "glasses",
    usage: ["Girls that wear glasses ```[command]```"],
    aliases: [],
    category: "NSFW",
    memberPermissions: [],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    //Settings for command,
    nsfw: true,
    run: async (client, message, args) => {
        async function glasses() {
            const akanekoSan = new discord.MessageEmbed()
            akanekoSan.setTitle("Girls that wear glasses, uwu~")
            akanekoSan.setColor("RANDOM")
            akanekoSan.setImage(await akaneko.nsfw.glasses())
            akanekoSan.setTimestamp()
            akanekoSan.setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
            return message.channel.send({embeds: [akanekoSan]});
        }
        glasses().catch(err => {
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