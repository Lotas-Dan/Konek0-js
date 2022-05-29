const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();

module.exports = {
      name: "wallpaper",
      category: "SFW",
      description: "sends random wallpaper",
      usage: "[command]",
      run: async (client, message, args) => {

            async function work() {
                  let owo = (await neko.sfw.wallpaper());

                  const wallpaper = new discord.MessageEmbed()
                        .setTitle("Random Wallpaper")
                        .setImage(owo.url)
                        .setColor(`#000000`)
                        .setTimestamp()
                  message.channel.send(wallpaper);
            }
            work();
      }
};