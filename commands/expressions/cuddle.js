const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
      name: "cuddle",
      category: "expressions",
      description: "cuddles a mentioned user",
      usage: "[command] + [user]",
      run: async (client, message, args) => {

            const user = message.mentions.users.first();
            if (!user)
                  return message.reply('Mention someone to cuddle');

            async function cuddle() {
                  let owo = (await neko.sfw.cuddle());

                  const cuddleembed = new discord.MessageEmbed()
                        .setTitle(user.username + " You just got a cuddle! ")
                        .setDescription((user.toString() + " got a cuddle from " + message.author.toString()))
                        .setImage(owo.url)
                        .setColor(`#000000`)
                        .setTimestamp()
                        .setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
                  message.channel.send(cuddleembed);

            }
            cuddle().catch(err => {
                  const { errLogChannelID } = require('../../config.json');
                  if(!errLogChannelID) return message.channel.send(err);
                  message.react('❌')
                  const logMessage = new discord.MessageEmbed()
                    .setTitle('Logs of CMD Errors | Crush | Broken')
                    .setColor('BLUE')
                    .setDescription(`${message.author.username} use CMD "***${cuddle.name}***"\nFrom server: ${message.guild.name}\n${err}`)
                    .setTimestamp()
                  client.channels.cache.get(errLogChannelID).send(logMessage);
            });
      }
};