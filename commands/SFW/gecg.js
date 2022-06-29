const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();

module.exports = {
      name: "gecg",
      usage: ["Genetically engineered catgirl ```[command]```"],
      aliases: [],
      category: "SFW",
      memberPermissions: [],
      botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
      //Settings for command
      nsfw: false,
      run: async (client, message, args) => {
            async function work() {
                  let owo = (await neko.gecg());

                  const wtf = new discord.MessageEmbed()
                        .setTitle("Genetically engineered catgirl")
                        .setImage(owo.url)
                        .setColor(`#000000`)
                        .setTimestamp()
                  return message.channel.send({embeds: [wtf]});
            }
            work();
      }
};