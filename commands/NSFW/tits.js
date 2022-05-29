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
          msg.delete({ timeout: 3000 })
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
      message.channel.send(boobs);
    }).catch(err => {
      const { errLogChannelID } = require('../../config.json');
      if(!errLogChannelID) return message.channel.send(err);
      message.react('❌')
      const logMessage = new discord.MessageEmbed()
        .setTitle('Logs of CMD Errors | Crush | Broken')
        .setColor('BLUE')
        .setDescription(`${message.author.username} use CMD "***tits***"\nFrom server: ${message.guild.name}\n${err}`)
        .setTimestamp()
      client.channels.cache.get(errLogChannelID).send(logMessage);
    });
  }
};