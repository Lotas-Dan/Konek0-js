const {Client, Message, MessageEmbed} = require('discord.js');
module.exports ={
    name: "say",
    usage: ["Repeats your text ```[command] + [text]```"],
    aliases: [],
    category: "fun",
    memberPermissions: [],
    botPermissions: ["VIEW_CHANNELS", "SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    //Settings for command
    nsfw: false,
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