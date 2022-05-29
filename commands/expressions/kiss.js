const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
      name: "kiss",
      category: "expressions",
      description: "kisses a mentioned user",
      usage: "[command] + [user]",
      run: async (client, message, args) => {

            const user = message.mentions.users.first();
            if (!user)
                  return message.reply('Mention someone to kiss');

            async function kiss() {
                  let owo = (await neko.sfw.kiss());

                  const kissembed = new discord.MessageEmbed()
                        .setTitle(user.username + " You have been kissed!")
                        .setDescription((user.toString() + " got kissed by " + message.author.toString()))
                        .setImage(owo.url)
                        .setColor(`#000000`)
                        .setTimestamp()
                        .setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
                  message.channel.send(kissembed);

            }
            kiss().catch(err => {
                  const { errLogChannelID } = require('../../config.json');
                  if(!errLogChannelID) return message.channel.send(err);
                  message.react('❌')
                  const logMessage = new discord.MessageEmbed()
                    .setTitle('Logs of CMD Errors | Crush | Broken')
                    .setColor('BLUE')
                    .setDescription(`${message.author.username} use CMD "***${kiss.name}***"\nFrom server: ${message.guild.name}\n${err}`)
                    .setTimestamp()
                  client.channels.cache.get(errLogChannelID).send(logMessage);
            });
      }
};