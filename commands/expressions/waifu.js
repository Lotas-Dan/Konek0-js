const discord = require('discord.js');
const { Random } = require("something-random-on-discord");

module.exports = {
    name: "waifu",
    usage: ["Got waifu ```[command]```"],
    aliases: [],
    category: "expressions",
    memberPermissions: [],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    //Settings for command
    nsfw: false,
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