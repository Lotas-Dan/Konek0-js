const discord = require('discord.js');
const booru = require('booru');

module.exports = {
    name: "r34",
    category: "NSFW",
    description: "Searches rule34",
    run: async (client, message, args) => {

        var errMessage = "This is not an NSFW Channel";
        if (!message.channel.nsfw) {
            message.react('💢');

            return message.reply(errMessage)
                .then(msg => {
                    msg.delete({ timeout: 3000 })
                })
        }

        if (message.content.toUpperCase().includes('LOLI') || message.content.toUpperCase().includes('GORE')) return message.channel.send('That kind of stuff is not allowed! Not even in NSFW channels!');

        var query = message.content.split(/\s+/g).slice(1).join(" ");
        booru.search('rule34', [query], { nsfw: true, limit: 1, random: true })
            .then(images => {
                for (let image of images) {
                    const embed = new discord.MessageEmbed()
                        .setTitle("Rule34:")
                        .setImage(image.fileUrl)
                        .setColor('#FF0000')
                        .setFooter(`Tags: r34 ${query}`)
                        .setTimestamp()
                    return message.channel.send({ embed });
                }

            }).catch(err => {
                if (err.name === 'BooruError' || err.name === 'QueryCanceled') {
                    return message.channel.send(`No results found for **${query}**!`);
                } else {
                    const { errLogChannelID } = require('../../config.json');
                    if(!errLogChannelID) return message.channel.send(err);
                    message.react('❌')
                    const logMessage = new discord.MessageEmbed()
                        .setTitle('Logs of CMD Errors | Crush | Broken')
                        .setColor('BLUE')
                        .setDescription(`${message.author.username} use CMD "***r34***"\nFrom server: ${message.guild.name}\n${err}`)
                        .setTimestamp()
                    client.channels.cache.get(errLogChannelID).send(logMessage);
                }
            })
    }
};