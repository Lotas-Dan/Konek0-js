const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();

module.exports = {
      name: "goose",
      category: "SFW",
      description: "sends random goose image",
      usage: "[command]",
      run: async (client, message, args) => {

            async function work() {
                  let owo = (await neko.sfw.goose());

                  const goose = new discord.MessageEmbed()
                        .setTitle("Random goose Image")
                        .setImage(owo.url)
                        .setColor(`#000000`)
                        .setTimestamp()
                  message.channel.send(goose);
            }
            work();
      }
};