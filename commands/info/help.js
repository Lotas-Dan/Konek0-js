const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "help",
    usage: ["Get a list of the currently available commands ```[prefix]help```", "Get information about a specific command```[prefix]help <command>```"],
    aliases: [],
    category: "info",
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
    //Settings for command
    nsfw: false,
    run: async (client, message, args) => {
        // If there's an args found
        // Send the info of that command found
        // If no info found, return not found embed.
        if (args[0]) {
            return getCMD(client, message, args[0]);
        } else {
            // Otherwise send all the commands available
            // Without the cmd info
            return getAll(client, message);
        }
    }
}

function getAll(client, message) {
    const embed = new MessageEmbed()
        .setColor("#FFDFD3")
        .setThumbnail("https://cdn.discordapp.com/avatars/430481994271424515/1cd4e04c72e5c09d4ca40b47f08a2c7b.webp")
        .setImage('https://media.discordapp.net/attachments/911449510608257044/979886961206653008/Konek0.gif')
        .setTitle('Need Help Menu ?')
        .setURL('https://www.youtube.com/watch?v=hoBb9oIFu8E')
        .setFooter("To see command descriptions and usage type k!help [CMD Name]")

    // Map all the commands
    // with the specific category
    const commands = (category) => {
        return client.commands
            .filter(cmd => cmd.category === category)
            .filter(cmd => cmd.hide !== true)
            .map(cmd => `\`${cmd.name}\``)
            .join(", ");
    }

    // Map all the categories
    // You may filtered to hide specific categories by default is 'owner'
    const info = client.categories
        .filter(cat => cat !== 'owner')
        .map(cat => stripIndents`**${cat[0].toUpperCase() + cat.slice(1)}** \n${commands(cat)}`)
        .reduce((string, category) => string + "\n" + category);

    return message.channel.send(embed.setDescription(info));
}

function getCMD(client, message, input) {
    const embed = new MessageEmbed()

    // Get the cmd by the name or alias
    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));

    let info = `No information found for command **${input.toLowerCase()}**`;

    // If no cmd is found, send not found embed
    if (!cmd) {
        return message.channel.send(embed.setColor("RED").setDescription(info));
    }

    // Add all cmd info to the embed
    if (cmd.name) info = `**Command name**: ${cmd.name}`;
    if (cmd.aliases) info += `\n**Aliases**: ${cmd.aliases.map(a => `\`${a}\``).join(", ")}`;
    if (cmd.description) info += `\n**Description**: ${cmd.description}`;
    if (cmd.usage) {
        info += `\n**Usage**: ${cmd.usage}`;
        embed.setFooter(`Syntax: [] = required, <[]> = optional`);
    }

    return message.channel.send(embed.setColor("GREEN").setDescription(info));
}
