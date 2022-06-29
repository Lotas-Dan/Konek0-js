const discord = require("discord.js");
const { errLogChannelID, prefix } = require('../../config.json');

module.exports = {
  name: "report",
  usage: ["Report a bug or problem with Konek0 ```[command] + [message]```"],
  aliases: [],
  category: "utility",
  memberPermissions: [],
  botPermissions: ["SEND_MESSAGES"],
  //Settings for command
  nsfw: false,
  run: async (client, message) => {
    const channel = client.channels.cache.get(errLogChannelID)
    if (!channel) return message.reply('Can\'t find logs channel ID')
    let rep = message.content.replace(`${prefix}report`, '');
    const mess = new discord.MessageEmbed()
      .setTitle('Bug Report')
      .setDescription(`From User: ${message.author.username}
                       From Server: ${message.guild.name}
                       Reported: ${rep}`)
      .setColor('RED')
      .setTimestamp()
    await channel.send({ embeds: [mess] });
    message.reply('Thanks you for the bug report <3')
  }
};