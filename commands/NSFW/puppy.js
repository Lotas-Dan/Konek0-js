const discord = require('discord.js');
const NSFW = require('@jcauman23/discordnsfw')
const nsfw = new NSFW();

module.exports = {
    name: "puppy",
    usage: ["--- ```[command]```"],
    aliases: [],
    category: "NSFW",
    memberPermissions: [],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    //Settings for command
    nsfw: true,
    run: async (client, message, args) => {
        async function puppy() {
            let te = await nsfw.hass();
            const msg = new discord.MessageEmbed()
                .setTitle('Anime puppy\'s')
                .setColor('RANDOM')
                .setImage(te)
                .setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
                .setTimestamp()
            return message.channel.send({embeds: [msg]})
        }
        puppy().catch(err => {
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