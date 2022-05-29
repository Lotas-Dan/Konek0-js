const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();

module.exports = {
      name: "gasm",
      category: "NSFW",
      usage: "[command]",
      run: async (client, message, args) => {
            
            var errMessage = "This is not an NSFW Channel";
            if (!message.channel.nsfw) {
                  message.react('💢');

                  return message.reply(errMessage)
                        .then(msg => {
                              msg.delete({ timeout: 3000 })
                        })
            }

            async function gasm() {
                  let owo = (await neko.nsfw.gasm());

                  const gasm = new discord.MessageEmbed()
                        .setTitle("Gasm")
                        .setImage(owo.url)
                        .setColor(`#FF0000`)
                        .setTimestamp()
                        .setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
                  message.channel.send(gasm);

            }
            gasm().catch(err => {
                  const { errLogChannelID } = require('../../config.json');
                  if(!logChannelID) return message.channel.send(err);
                  message.react('❌')
                  const logMessage = new discord.MessageEmbed()
                        .setTitle('Logs of CMD Errors | Crush | Broken')
                        .setColor('BLUE')
                        .setDescription(`${message.author.username} use CMD "***${gasm.name}***"\nFrom server: ${message.guild.name}\n${err}`)
                        .setTimestamp()
                  client.channels.cache.get(errLogChannelID).send(logMessage);
            });
      }
};