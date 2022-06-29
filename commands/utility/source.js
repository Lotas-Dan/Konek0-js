module.exports = {
    name: "source",
    usage: ["Doesn\'t display real code ```[command]```"],
    aliases: [],
    category: "utility",
    memberPermissions: [],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    //Settings for command
    nsfw: false,
    run: async (client, message) => {
        return message.reply('https://github.com/Lotas-Dan/Konek0-js')
        //Please do not change and delete this. I believe in you <3
    }
}