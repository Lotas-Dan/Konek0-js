const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "cattext",
  usage: ["Transfers text to cattext ```[command] + [text]```"],
  aliases: [],
  category: "fun",
  memberPermissions: [],
  botPermissions: ["SEND_MESSAGES"],
  //Settings for command
  nsfw: false,
  run: async (client, message, args) => {
    async function cattext() {

      let owo = (await neko.catText());
      message.channel.send(owo.cat).catch(err => {
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
    cattext();
  }
};