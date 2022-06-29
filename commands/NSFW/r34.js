const discord = require('discord.js');
const booru = require('booru');

module.exports = {
    name: "r34",
    usage: ["Rule34 ```[command] + [category]```"],
    aliases: [],
    category: "NSFW",
    memberPermissions: [],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    //Settings for command
    nsfw: true,
    run: async (client, message, args) => {
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
                    return message.channel.send({ embeds: [embed] });
                }

            }).catch(err => {
                if (err.name === 'BooruError' || err.name === 'QueryCanceled') {
                    return message.channel.send(`No results found for **${query}**!`);
                } else {
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
};