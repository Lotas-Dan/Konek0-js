const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "meme",
    usage: ["Got meme ```[command]```"],
    aliases: [],
    category: "fun",
    memberPermissions: [],
    botPermissions: ["SEND_MESSAGES"],
    //Settings for command
    nsfw: false,
    run: async (client, message, args) => {
        const subReddits = ["dankmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`From ${random}`)
            .setTimestamp();

        message.channel.send(embed);
    }
};