const superagent = require("node-fetch");
const discord = require('discord.js')

const rp = require('request-promise-native');

module.exports = {
  name: "tits",
  category: "NSFW",
  description: "Sends tite's",
  run: async (client, message, args, level) => {

    var errMessage = "This is not an NSFW Channel";
    if (!message.channel.nsfw) {
      message.react('💢');

      return message.reply(errMessage)
        .then(msg => {
          setTimeout(() => msg.delete(), 3000);
        })
    }

    return rp.get('http://api.oboobs.ru/boobs/0/1/random').then(JSON.parse).then(function (res) {
      return rp.get({
        url: 'http://media.oboobs.ru/' + res[0].preview,
        encoding: null
      });
    }).then(function (res) {

      const boobs = new discord.MessageEmbed()
        .setTitle("Girl Tits")
        .setColor(`#FF0000`)
        .setImage("attachment://file.png").attachFiles([{ attachment: res, name: "file.png" }])
        .setTimestamp()
        .setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
      return message.channel.send({embeds: [boobs]});
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