const discord = require("discord.js");
const { errLogChannelID, prefix } = require('../../config.json');

module.exports = {
  name: "report",
  category: "utility",
  description: "Bot error reporting",
  cooldown: 5000,
  usage: "[command | input]",
  run: async (client, message) => {
    if(!errLogChannelID) return message.reply('Can\'t find logs channel ID')
      let rep = message.content.replace(`${prefix}report`, '');
      const mess = new discord.MessageEmbed()
      .setTitle('Bug Report')
      .setDescription(`From User: ${message.author.username}
                       From Server: ${message.guild.name}
                       Reported: ${rep}`)
      .setColor('RED')
      .setTimestamp()
       await client.channels.cache.get(errLogChannelID).send(mess);
       message.reply('Thanks you for the bug report <3')
  }
};