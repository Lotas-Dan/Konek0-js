const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();

module.exports = {
      name: "goose",
      usage: ["Random goose Image ```[command]```"],
      aliases: [],
      category: "SFW",
      memberPermissions: [],
      botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
      //Settings for command
      nsfw: false,
      run: async (client, message, args) => {
            async function work() {
                  let owo = (await neko.goose());

                  const goose = new discord.MessageEmbed()
                        .setTitle("Random goose Image")
                        .setImage(owo.url)
                        .setColor(`#000000`)
                        .setTimestamp()
                  return message.channel.send({embeds: [goose]});
            }
            work();
      }
};