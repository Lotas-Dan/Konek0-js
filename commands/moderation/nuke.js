const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "nuke",
  usage: ["Clar all channel ```[command]```"],
  aliases: ["clearchannel"],
  category: "moderation",
  memberPermissions: ["ADMINISTRATOR"],
  botPermissions: ["MANAGE_CHANNELS", "MANAGE_MESSAGES"],
  //Settings for command
  nsfw: false,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const time = setTimeout(() => {return message.channel.send('**Response time is out**')}, 20000,
    message.channel.send(`${message.author}` + "\nThis CMD will force delete all messages of this channel!\nYou want to continue ?")
    .then(msg => {
      msg.react("✅")
      msg.react("❌")
      let collector = msg.createReactionCollector(
        (reaction, user) => user.id === message.author.id
      );
      collector.on("collect", async (reaction, user) => {
        if (reaction.emoji.name === "✅") {
          clearTimeout(time)
          message.channel.clone().then((ch) => {
            ch.setParent(message.channel.parentID);
            ch.setPosition(message.channel.position);
            setTimeout(() => 10, message.channel.delete());
            ch.send(
              new MessageEmbed()
                .setTitle(`All done BOSS ${message.author.tag}`)
                .setImage(
                  "https://media1.tenor.com/images/471289cde2490c80f60d5e85bcdfb6da/tenor.gif?itemid=8911364"
                )
            );
          });
        } else {
          msg.edit(`${message.author}` + 'You canceled the operation, this message will be deleted after 5 seconds')
          setTimeout(() => msg.delete(), 5000)}
      })
    }))
  },
};