const { MessageEmbed, DiscordAPIError } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'boobs',
  description: 'Menampilkan nsfw bergenre Boobs',
  cooldown: 5000,
  run: async (client, message, args) => {

    if (!message.channel.nsfw) {
      return message.reply(
        `This is not an NSFW Channel`
      )
    }

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

      return message.channel.send(BoobsEmbed)

    } catch (err) {
      if (DiscordAPIError) {
        return message.channel.send("Some Problems with API Sorry <3")
      }
      else {
        const { errLogChannelID } = require('../../config.json');
        if(!errLogChannelID) return message.channel.send(err);
        message.react('❌')
        const logMessage = new MessageEmbed()
          .setTitle('Logs of CMD Errors | Crush | Broken')
          .setColor('BLUE')
          .setDescription(`${message.author.username} use CMD "***boobs***"\nFrom server: ${message.guild.name}\n${err}`)
          .setTimestamp()
        client.channels.cache.get(errLogChannelID).send(logMessage);
      }
    }
  }
};