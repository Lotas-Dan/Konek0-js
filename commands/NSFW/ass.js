const superagent = require("node-fetch");
const discord = require('discord.js')

const rp = require('request-promise-native');

module.exports = {
  name: "ass",
  category: "NSFW",
  description: "Sends ass Pic",
  run: async (client, message, args, level) => {

    var errMessage = "This is not an NSFW Channel";
    if (!message.channel.nsfw) {
      message.react('💢');

      return message.reply(errMessage)
        .then(msg => {
          setTimeout(() => msg.delete(), 3000);
        })
    }

    return rp.get('http://api.obutts.ru/butts/0/1/random').then(JSON.parse).then(function (res) {
      return rp.get({
        url: 'http://media.obutts.ru/' + res[0].preview,
        encoding: null
      });
    }).then(function (res) {

      const ass = new discord.MessageEmbed()
        .setTitle("Ass")
        .setColor(`#FF0000`)
        .setImage("attachment://file.png").attachFiles([{ attachment: res, name: "file.png" }])
        .setTimestamp()
        .setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
      return message.channel.send({embeds: [ass]});
    }).catch(err => {
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
    });
  }
};