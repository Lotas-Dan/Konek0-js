const discord = require('discord.js');
const { Random } = require("something-random-on-discord");

module.exports = {
    name: "cry",
    usage: ["When you are very sad ```[command]```"],
    aliases: [],
    category: "emotions",
    memberPermissions: [],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    //Settings for command
    nsfw: false,
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