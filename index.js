//Modules
const { Client, Collection } = require("discord.js"),
config = require("./config.json"),
fs = require("fs");

const client = new Client({
    disableEveryone: true,
    intents: ['GUILDS', 'GUILD_BANS','GUILD_MEMBERS','GUILD_MESSAGES']
});

//Command Handler
client.commands = new Collection();
client.aliases = new Collection();
client.event = new Collection();

//Command Folder location
client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

const event = require('./Event/messageCreate');
client.on('messageCreate',  event.bind(null, client))
console.log('Connected to Event/MessageCreate!');

//Bot Status
client.on("ready", () => {
    client.user.setActivity('I love the 『♛ 𝕰𝖒𝖕𝖊𝖗𝖔𝖗 ♛』| k!help', { type: 'WATCHING' });
    console.log(`${client.user.username} has been logged in and is ready to use!`);
});

//Log into discord using the token in config.json
(async () => {
   await client.login(config.token);
})()
