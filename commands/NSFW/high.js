const discord = require('discord.js');
const NSFW = require('@jcauman23/discordnsfw')
const nsfw = new NSFW();

module.exports = {
    name: "high",
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

        async function high() {
            let mess = await nsfw.hthigh();
            const msg = new discord.MessageEmbed()
                .setTitle('Hentai high')
                .setColor('RANDOM')
                .setImage(mess)
                .setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
                .setTimestamp()
            return message.channel.send({embeds: [msg]})
        }
        high().catch(err => {
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