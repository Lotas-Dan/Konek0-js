const discord = require('discord.js'),
    config = require('../config.json');

module.exports = async (client, message) => {
    //Loads prefix from config.json
    const prefix = (config.prefix);
    //Makes sure bot wont respond to other bots including itself
    if (message.author.bot) return;
    //Checks if the command is from a server and not a dm
    if (!message.guild) return;
    //Checks if the command starts with a prefix
    if (!message.content.startsWith(prefix)) return;
    //Makes sure bot wont respond to other bots including itself
    if (!message.member) message.member = await message.guild.fetchMember(message);
    //Checking if the message is a command
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmdName = args.shift().toLowerCase();
    const cmd = client.commands.get(cmdName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));
    //If it isn't a command then return
    if (!cmdName) return;
    //If channel isn't nsfw and command is return error
    if (!message.channel.nsfw && cmd.nsfw) {
        message.react('💢');
        return message.reply("This is not an NSFW Channel")
            .then(msg => {
                setTimeout(() => msg.delete(), 6000)
            }); //Error message ⬆
    }
    let userPerms = [];
    //Checking for members permission
    cmd.memberPermissions.forEach((perm) => {
        if (!message.channel.permissionsFor(message.member).has(perm)) {
            userPerms.push(perm);
        }
    });
    //If user permissions arraylist length is more than one return error
    if (userPerms.length > 0 && !message.member.roles.cache.find((r) => r.name.toLowerCase() === config.adminRole.toLowerCase())) {
        client.logger.cmd(`${message.author.tag} used ${cmd.name} - Missing permissions`);
        return message.channel.send("Looks like you're missing the following permissions:\n" + userPerms.map((p) => `\`${p}\``).join(", "));
    }
    let clientPerms = [];
    //Checking for client permissions
    cmd.botPermissions.forEach((perm) => {
        if (!message.channel.permissionsFor(message.guild.me).has(perm)) {
            clientPerms.push(perm);
        }
    });
    //If client permissions arraylist length is more than one return error
    if (clientPerms.length > 0) {
        client.logger.cmd(`${message.author.tag} used ${cmd.name} - Missing permissions`);
        return message.channel.send("Looks like I'm missing the following permissions:\n" + clientPerms.map((p) => `\`${p}\``).join(", "));
    }
    cmd.run(client, message, args);
};