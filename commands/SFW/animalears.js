const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();

module.exports = {
      name: "animalears",
      category: "SFW",
      description: "kemonomimi",
      usage: "[command]",
      nsfw: false,
      run: async (client, message, args) => {
            async function work() {
                  let owo = (await neko.kemonomimi());

                  const animalears = new discord.MessageEmbed()
                        .setTitle("Kemonomimi")
                        .setImage(owo.url)
                        .setColor(`#000000`)
                        .setTimestamp()
                  return message.channel.send({embeds: [animalears]});
            }
            work();
      }
};