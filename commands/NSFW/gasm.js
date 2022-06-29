const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();

module.exports = {
      name: "gasm",
      usage: ["--- ```[command]```"],
      aliases: [],
      category: "NSFW",
      memberPermissions: [],
      botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
      //Settings for command
      nsfw: true,
      run: async (client, message, args) => {
            async function gasm() {
                  let owo = (await neko.nsfw.gasm());

                  const gasm = new discord.MessageEmbed()
                        .setTitle("Gasm")
                        .setImage(owo.url)
                        .setColor(`#FF0000`)
                        .setTimestamp()
                        .setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
                  return message.channel.send({embeds: [gasm]});

            }
            gasm().catch(err => {
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