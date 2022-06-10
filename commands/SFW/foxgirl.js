const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();

module.exports = {
      name: "foxgirl",
      category: "SFW",
      description: "sends random foxgirl",
      usage: "[command]",
      run: async (client, message, args) => {

            async function work() {
                  let owo = (await neko.sfw.foxGirl());

                  const foxGirl = new discord.MessageEmbed()
                        .setTitle("Random Fox Girl")
                        .setImage(owo.url)
                        .setColor(`#000000`)
                        .setTimestamp()
                  return message.channel.send({embeds: [foxGirl]});
            }
            work();
      }
};