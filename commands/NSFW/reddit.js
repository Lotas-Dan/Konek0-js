const discord = require("discord.js");
const redd = require('reddit.images');

module.exports = {
    name: "reddit",
    usage: ["Reddit ```[command] + [subreddit] | <[command] + [sub/tags]>```"],
    aliases: [],
    category: "NSFW",
    memberPermissions: [],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    //Settings for command
    nsfw: true,
    run: async (client, message, args) => {
        if (message.content.includes('tags')) {
            const tag = new discord.MessageEmbed()
                .setTitle("All Hentai Tags ↴")
                .setColor("ORANGE")
                .setDescription(":ideograph_advantage:  ***hentai, futanari, hentai_gif, hentaibeast, hentaifemdom, hentai_femdom, tentai, hentaibondage, consentai, trap, slimegirls, biosuits, thighdeology, muchihentai, waifusgonewild, dekaihentai, doujinshi***  :ideograph_advantage:")
                .setTimestamp()
                .setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
            return message.channel.send(tag);
        }

        if (message.content.toUpperCase().includes('LOLI') || message.content.toUpperCase().includes('GORE')) return message.channel.send('That kind of stuff is not allowed! Not even in NSFW channels!');

        var query = message.content.split(/\s+/g).slice(1).join(" ");
        redd.FetchSubredditPost({ subreddit: [query] }).then(url => {
            const reddQuery = new discord.MessageEmbed()
                .setTitle(`Category: ${query}`)
                .setColor("ORANGE")
                .setImage(`${url.image}`)
                .setTimestamp()
                .setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
            return message.channel.send({embeds: [reddQuery]});
        }).catch(err => {
            if (err.name == 'Type must given' || (err.name == 'Invalid Subreddit!')) {
                return message.channel.send(`No results found for **${query}**!`);
            }
            if (err.name == 'Private Subreddit!') {
                return message.channel.send(`${query} is private channel`)
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