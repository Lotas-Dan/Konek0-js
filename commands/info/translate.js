module.exports ={
    name: "translate",
    usage: ["Translate your text to another lang ```[command] + [text]```"],
    aliases: ["tl"],
    category: "info",
    memberPermissions: [],
    botPermissions: ["SEND_MESSAGES"],
    //Settings for command
    nsfw: false,
    run:async(client, message, args) => {
        message.channel.send("Command under construction!");
    }
}