const discord = require("discord.js");
const { Random } = require("something-random-on-discord");

module.exports = {
  name: "punch",
  category: "expressions",
  description: "Punch someone",
  run: async (client, message, args) => {

    let target = message.mentions.members.first()
    if (!target)
      return message.reply('You need to mention the user') //'Why are you doing it ? ＞﹏＜'
    let data = await Random.getAnimeImgURL("punch");

    const embed = new discord.MessageEmbed()
      .setTitle(user.username + " You have been punched")
      .setImage(data)
      .setColor("RANDOM")
      .setDescription(target.toString() + " punches " + message.author.toString())
      .setTimestamp()
      .setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
    return message.channel.send({embeds: [embed]});
  }
};