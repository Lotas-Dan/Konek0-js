const discord = require('discord.js');
const akaneko = require('akaneko');

module.exports = {
    name: "uniform",
    category: "NSFW",
    run: async (client, message, args) => {
        
        var errMessage = "This is not an NSFW Channel";
        if (!message.channel.nsfw) {
            message.react('💢');

            return message.reply(errMessage)
                .then(msg => {
                    setTimeout(() => msg.delete(), 3000);
                })
        }
        async function uniform() {
            const akanekoSan = new discord.MessageEmbed()
            akanekoSan.setTitle("Military, Konbini, Work, Nurse Uniforms")
            akanekoSan.setColor("RANDOM")
            akanekoSan.setImage(await akaneko.nsfw.uniform())
            akanekoSan.setTimestamp()
            akanekoSan.setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
            return message.channel.send({embeds: [akanekoSan]});
        }
        uniform().catch(err => {
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