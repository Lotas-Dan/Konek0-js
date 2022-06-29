const superagent = require("node-fetch");
const discord = require('discord.js')

const rp = require('request-promise-native');

module.exports = {
  name: "tits",
  usage: ["--- ```[command]```"],
  aliases: [],
  category: "NSFW",
  memberPermissions: [],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  //Settings for command
  nsfw: true,
  run: async (client, message, args, level) => {
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