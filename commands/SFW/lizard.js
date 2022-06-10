const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();

module.exports = {
      name: "lizard",
      category: "SFW",
      description: "sends random lizard image",
      usage: "[command]",
      run: async (client, message, args) => {

            async function work() {
                  let owo = (await neko.sfw.lizard());

                  const lizard = new discord.MessageEmbed()
                        .setTitle("Random Lizard Image")
                        .setImage(owo.url)
                        .setColor(`#000000`)
                        .setTimestamp()
                  return message.channel.send({embeds: [lizard]});
            }
            work();
      }
};