const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "cattext",
  category: "fun",
  description: "sends owo nya cute anime waifu text stuff",
  usage: "[command]",
  run: async (client, message, args) => {

    async function cattext() {

      let owo = (await neko.sfw.catText());
      message.channel.send(owo.cat).catch(err => {
        const { errLogChannelID } = require('../../config.json');
        if(!logChannelID) return message.channel.send(err);
        message.react('❌')
        const logMessage = new discord.MessageEmbed()
          .setTitle('Logs of CMD Errors | Crush | Broken')
          .setColor('BLUE')
          .setDescription(`${message.author.username} use CMD "***${cattext.name}***"\nFrom server: ${message.guild.name}\n${err}`)
          .setTimestamp()
        client.channels.cache.get(errLogChannelID).send(logMessage);
      });
    }
    cattext();
  }
};