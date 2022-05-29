const discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
    name: "gifs",
    category: "NSFW Gif",
    description: "Get some gifs",
    run: async (client, message, args) => {

        var errMessage = "This is not an NSFW Channel";
        if (!message.channel.nsfw) {
            message.react('💢');

            return message.reply(errMessage)
                .then(msg => {
                    msg.delete({ timeout: 3000 })
                })
        }

        async function gifs() {
            const akanekoSan = new discord.MessageEmbed()
            akanekoSan.setTitle("Basically an animated image, so yes :3")
            akanekoSan.setColor("RANDOM")
            akanekoSan.setImage(await akaneko.nsfw.gifs());
            akanekoSan.setTimestamp()
            akanekoSan.setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
            return message.channel.send(akanekoSan);
        }
        gifs().catch(err => {
            const { errLogChannelID } = require('../../config.json');
            if(!errLogChannelID) return message.channel.send(err);
            message.react('❌')
            const mess = new discord.MessageEmbed()
                .setTitle('Logs of CMD Errors | Crush | Broken')
                .setColor('BLUE')
                .setDescription(`${message.author.username} use CMD "***${gifs.name}***"\nFrom server: ${message.guild.name}\n${err}`)
                .setTimestamp()
            client.channels.cache.get(errLogChannelID).send(mess)
        })
    }
}