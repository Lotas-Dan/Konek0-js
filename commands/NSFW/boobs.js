const { MessageEmbed, DiscordAPIError } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: "boobs",
  usage: ["I know you like boobies ```[command]```"],
  aliases: [],
  category: "NSFW",
  memberPermissions: [],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  //Settings for command
  nsfw: true,
  run: async (client, message, args) => {
    try {

      var subreddits = [
        'boobs',
        'Boobies',
        'Stacked',
        'BustyPetite',
        'Cleavage',
        'bustyasians',
        'boltedontits',
        'burstingout'
      ]

      var reddit = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

      const data = await fetch(`https://meme-api.herokuapp.com/gimme/${reddit}`).then(res => res.json())

      if (!data) return message.channel.send(`Error`);

      const { title, postLink, url, subreddit } = data

      const BoobsEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setURL(postLink)
        .setImage(url)
        .setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))

      return message.channel.send({embeds: [BoobsEmbed]})

    } catch (err) {
      if (DiscordAPIError) {
        return message.channel.send("Some Problems with API Sorry <3")
      }
      else {
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
      }
    }
  }
};