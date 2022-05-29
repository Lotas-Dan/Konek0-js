const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');


module.exports = {
  name: "fact",
  category: "fun",
  description: "sends a random fact",
  usage: "[command]",
  run: async (client, message, args) => {

    async function fact() {

      let owo = (await neko.sfw.fact());
      message.channel.send(owo.fact).catch(err => {
        const { errLogChannelID } = require('../../config.json');
        if(!errLogChannelID) return message.channel.send(err);
        message.react('❌')
        const logMessage = new discord.MessageEmbed()
          .setTitle('Logs of CMD Errors | Crush | Broken')
          .setColor('BLUE')
          .setDescription(`${message.author.username} use CMD "***${fact.name}***"\nFrom server: ${message.guild.name}\n${err}`)
          .setTimestamp()
        client.channels.cache.get(errLogChannelID).send(logMessage);
      });
    }
    fact();
  }
};