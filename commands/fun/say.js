const {Client, Message, MessageEmbed} = require('discord.js');
module.exports ={
    name: "say",
    cooldown: 3000,
    category: "fun",
    botPermission: [
        "VIEW_CHANNELS",
        "SEND_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
    ],
    authorPermission: [""],
    /**
     * @param {Client} client
     * @param {Message} message
     * @Param {String[]} args
     */
    run:async (client,message,args) =>{
        const text = args.slice(0).join(" ");

        if(!text) return message.channel.send("Please provide text to say");
        else
        return message.channel.send(
            new MessageEmbed()
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
            .setDescription(text)
            .setColor("303136")
        );
    },
};