const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();

module.exports = {
      name: "cat",
      category: "SFW",
      description: "sends random cat image",
      usage: "[command]",
      run: async (client, message, args) => {

            async function work() {
                  let owo = (await neko.sfw.meow());

                  const cat = new discord.MessageEmbed()
                        .setTitle("Random Cat Image")
                        .setImage(owo.url)
                        .setColor(`#000000`)
                        .setTimestamp()
                  message.channel.send(cat);
            }
            work();
      }
};