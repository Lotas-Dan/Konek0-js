const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();

module.exports = {
      name: "dog",
      category: "SFW",
      description: "sends random dog image",
      usage: "[command]",
      run: async (client, message, args) => {

            async function work() {
                  let owo = (await neko.sfw.woof());

                  const dog = new discord.MessageEmbed()
                        .setTitle("Random dog Image")
                        .setImage(owo.url)
                        .setColor(`#000000`)
                        .setTimestamp()
                  message.channel.send(dog);
            }
            work();
      }
};