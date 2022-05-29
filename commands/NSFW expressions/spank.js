const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
      name: "spank",
      category: "NSFW expressions",
      description: "spanks a mentioned user",
      usage: "[command] + [user]",
      run: async (client, message, args) => {

            var errMessage = "This is not an NSFW Channel";
            if (!message.channel.nsfw) {
                  message.react('💢');

                  return message.reply(errMessage)
                        .then(msg => {
                              msg.delete({ timeout: 3000 })
                        })
            }
            const user = message.mentions.users.first();
            if (!user)
                  return message.reply('Mention someone to spank');

            async function spank() {
                  let owo = (await neko.nsfw.spank());

                  const cuddleembed = new discord.MessageEmbed()
                        .setTitle(user.username + " You have been spanked! ")
                        .setDescription((user.toString() + " has been spanked by " + message.author.toString() + "!"))
                        .setImage(owo.url)
                        .setColor(`#000000`)
                        .setTimestamp()
                        .setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
                  message.channel.send(cuddleembed);

            }
            spank().catch(err => {
                  const { errLogChannelID } = require('../../config.json');
                  if(!errLogChannelID) return message.channel.send(err);
                  message.react('❌')
                  const logMessage = new discord.MessageEmbed()
                        .setTitle('Logs of CMD Errors | Crush | Broken')
                        .setColor('BLUE')
                        .setDescription(`${message.author.username} use CMD "***${spank.name}***"\nFrom server: ${message.guild.name}\n${err}`)
                        .setTimestamp()
                  client.channels.cache.get(errLogChannelID).send(logMessage);
            });
      }
};
