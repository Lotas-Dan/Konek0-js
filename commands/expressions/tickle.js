const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
      name: "tickle",
      category: "expressions",
      description: "tickles a mentioned user",
      usage: "[command] + [user]",
      run: async (client, message, args) => {

            const user = message.mentions.users.first();
            if (!user)
                  return message.reply('Mention someone to tickle');

            async function tickle() {
                  let owo = (await neko.sfw.poke());

                  const tickleembed = new discord.MessageEmbed()
                        .setTitle(user.username + " You have been tickled ")
                        .setDescription((user.toString() + " got tickled by " + message.author.toString()))
                        .setImage(owo.url)
                        .setColor(`#000000`)
                        .setTimestamp()
                        .setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
                  return message.channel.send({embeds: [tickleembed]});
            }
            tickle().catch(err => {
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