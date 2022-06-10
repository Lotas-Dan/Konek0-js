const client = require('nekos.life');
const discord = require('discord.js')
const neko = new client();

module.exports = {
      name: "gecg",
      category: "SFW",
      description: "Genetically engineered catgirl",
      usage: "[command]",
      run: async (client, message, args) => {

            async function work() {
                  let owo = (await neko.sfw.gecg());

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