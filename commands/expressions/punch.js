const discord = require("discord.js");
const { Random } = require("something-random-on-discord");

module.exports = {
  name: "punch",
  usage: ["Got punches ```[command] + [mention user]```"],
  aliases: [],
  category: "expressions",
  memberPermissions: [],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  //Settings for command
  nsfw: false,
  run: async (client, message, args) => {
    const target = message.mentions.members.first()
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