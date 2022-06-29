const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();

module.exports = {
      name: "wallpaper",
      usage: ["Random Wallpaper ```[command]```"],
      aliases: ["wall"],
      category: "SFW",
      memberPermissions: [],
      botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
      //Settings for command
      nsfw: false,
      run: async (client, message, args) => {
            async function work() {
                  let owo = (await neko.wallpaper());

                  const wallpaper = new discord.MessageEmbed()
                        .setTitle("Random Wallpaper")
                        .setImage(owo.url)
                        .setColor(`#000000`)
                        .setTimestamp()
                  return message.channel.send({embeds: [wallpaper]});
            }
            work();
      }
};