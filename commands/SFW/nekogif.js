const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();

module.exports = {
      name: "nekogif",
      category: "SFW",
      description: "sends random neko gif",
      usage: "[command]",
      run: async (client, message, args) => {

            async function work() {
                  let owo = (await neko.sfw.nekoGif());

                  const nekogif = new discord.MessageEmbed()
                        .setTitle("Random Neko Gif")
                        .setImage(owo.url)
                        .setColor(`#000000`)
                        .setTimestamp()
                  message.channel.send(nekogif);
            }
            work();
      }
};