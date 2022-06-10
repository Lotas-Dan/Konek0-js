const discord = require('discord.js');
const { Random } = require("something-random-on-discord");
//const random = new Random();

module.exports = {
    name: "cry",
    category: "emotions",
    description: "Cry Gif",
    run: async (client, message, args) => {
        let data = await Random.getAnimeImgURL("cry");

        const embed = new discord.MessageEmbed()
            .setTitle("Someone is cry")
            .setImage(data)
            .setColor("RANDOM")
            .setDescription("Please talk with " + message.author.toString() + " they are crying")
            .setTimestamp()
            .setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
        return message.channel.send({embeds : [embed]})
    }
};