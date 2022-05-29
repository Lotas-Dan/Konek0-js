const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
      name: "slap",
      category: "expressions",
      description: "slaps a mentioned user",
      usage: "[command] + [user]",
      run: async (client, message, args) => {

            const user = message.mentions.users.first();
            if (!user)
                  return message.reply('Mention someone to slap');

            async function slap() {
                  let owo = (await neko.sfw.slap());

                  const slapemebd = new discord.MessageEmbed()
                        .setTitle(user.username + " You have been slapped ")
                        .setDescription((user.toString() + " got slapped by " + message.author.toString()))
                        .setImage(owo.url)
                        .setColor(`#000000`)
                        .setTimestamp()
                        .setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
                  message.channel.send(slapemebd);
            }
            slap().catch(err => {
                  const { errLogChannelID } = require('../../config.json');
                  if(!errLogChannelID) return message.channel.send(err);
                  message.react('❌')
                  const logMessage = new discord.MessageEmbed()
                    .setTitle('Logs of CMD Errors | Crush | Broken')
                    .setColor('BLUE')
                    .setDescription(`${message.author.username} use CMD "***${slap.name}***"\nFrom server: ${message.guild.name}\n${err}`)
                    .setTimestamp()
                  client.channels.cache.get(errLogChannelID).send(logMessage);
            });
      }
};