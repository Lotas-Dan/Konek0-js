const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "owoify",
  usage: ["Transfer text to owoify ```[command] + [text]```"],
  aliases: [],
  category: "fun",
  memberPermissions: [],
  botPermissions: ["SEND_MESSAGES"],
  //Settings for command
  nsfw: false,
  run: async (client, message, args) => {
    async function owoify() {

      let coolusertext = args.join(" ");
      if (!coolusertext) return message.channel.send('Please type some text to owoify.')
      if (coolusertext.length > 200) return message.channel.send(`I can't owoify your text, it is over 200 characters long!`)

      let owo = await neko.OwOify({ text: coolusertext });
      message.channel.send(owo.owo).catch(err => {
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
    owoify();
  }
};