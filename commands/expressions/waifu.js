const discord = require('discord.js');
const { Random } = require("something-random-on-discord");

module.exports = {
    name: "waifu",
    aliases: ["if"],
    category: "expressions",
    description: "You new waifu",
    run: async (client, message, args) => {
        let data = await Random.getAnimeImgURL("waifu");

        let embed = new discord.MessageEmbed()
            .setTitle("New waifu")
            .setImage(data)
            .setColor("RANDOM")
            .setTimestamp()
            .setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
        message.channel.send(embed)
    }
};