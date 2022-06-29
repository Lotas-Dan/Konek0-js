const discord = require("discord.js");

module.exports = {
  name: "serverinfo",
  usage: ["Get information about the current server ```[command]```"],
  aliases: [],
  category: "utility",
  memberPermissions: [],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  //Settings for command
  nsfw: false,
  run: async (client, message, args) => {
    let servericon = message.guild.iconURL;
    const serverembed = new discord.MessageEmbed()
      .setTitle("Server Information")
      .setColor("RANDOM")
      .setThumbnail(servericon)
      .addField("Server Name", message.guild.name)
      .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
      .addField("Channels", message.guild.channels.cache.size, true)
      .addField("Roles", message.guild.roles.cache.size, true)
      .addField("Created On", message.guild.createdAt)
      .addField("You Joined", message.member.joinedAt)
      .addField("Total Members", message.guild.memberCount)
      .setThumbnail(message.guild.iconURL())
      .setTimestamp()
      .setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
    return message.channel.send({embeds: [serverembed]});
  }
};