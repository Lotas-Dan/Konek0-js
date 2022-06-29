const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');


module.exports = {
  name: "fact",
  usage: ["Got fact ```[command]```"],
  aliases: [],
  category: "fun",
  memberPermissions: [],
  botPermissions: ["SEND_MESSAGES"],
  //Settings for command
  nsfw: false,
  run: async (client, message, args) => {
    async function fact() {

      let owo = (await neko.sfw.fact());
      message.channel.send(owo.fact).catch(err => {
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
    fact();
  }
};