const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
      name: "pat",
      category: "expressions",
      description: "pats a mentioned user",
      usage: "[command] + [user]",
      run: async (client, message, args) => {

            const user = message.mentions.users.first();
            if (!user)
                  return message.reply('Mention someone to pat');

            async function pat() {
                  let owo = (await neko.sfw.pat());

                  const patembed = new discord.MessageEmbed()
                        .setTitle(user.username + " !!! ")
                        .setDescription((user.toString() + " got patted by " + message.author.toString()))
                        .setImage(owo.url)
                        .setColor(`#000000`)
                        .setTimestamp()
                        .setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
                  message.channel.send(patembed);

            }
            pat().catch(err => {
                  const { errLogChannelID } = require('../../config.json');
                  if(!errLogChannelID) return message.channel.send(err);
                  message.react('❌')
                  const logMessage = new discord.MessageEmbed()
                    .setTitle('Logs of CMD Errors | Crush | Broken')
                    .setColor('BLUE')
                    .setDescription(`${message.author.username} use CMD "***${pat.name}***"\nFrom server: ${message.guild.name}\n${err}`)
                    .setTimestamp()
                  client.channels.cache.get(errLogChannelID).send(logMessage);
            });
      }
};