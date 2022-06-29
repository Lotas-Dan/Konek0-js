const client = require('nekos.life');
const discord = require('discord.js');
const neko = new client();
const utils = require('../../utils');

module.exports = {
      name: "baka",
      usage: ["Someone call an idot ```[command] + [mention user]```"],
      aliases: [],
      category: "emotions",
      memberPermissions: [],
      botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
      //Settings for command
      nsfw: false,
      run: async (client, message, args) => {
            const user = message.mentions.users.first();
            if (!user)
                  return message.reply('Mention someone call an idot to');

            async function baka() {
                  let owo = (await neko.sfw.baka());

                  const baka = new discord.MessageEmbed()
                        .setTitle(" IDIOT! ")
                        .setDescription((" BAKA!!! " + user.toString()))
                        .setImage(owo.url)
                        .setColor(`#000000`)
                        .setTimestamp()
                        .setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
                  return message.channel.send({embeds: [baka]});

            }
            baka().catch(err => {
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