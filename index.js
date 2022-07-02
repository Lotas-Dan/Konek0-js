//Modules
const { Client, Collection } = require("discord.js"),
config = require("./config.json"),
fs = require("fs");

const client = new Client({
    disableEveryone: true,
    intents: ['GUILDS', 'GUILD_BANS','GUILD_MEMBERS','GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS']
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

try{
const messageCreate = require('./Event/messageCreate');
client.on('messageCreate',  messageCreate.bind(null, client))
console.log('Connected to Event/MessageCreate!');
}catch{console.log('Failed Connect to Events/Message')}

try{//Bot Status
const ready = require('./Event/ready');
client.on("ready", ready.bind(null, client))
console.log('Connected to Events/Ready');
}catch{console.log('Failed Connect to Events/Ready')}

//Log into discord using the token in config.json
(async () => {
   await client.login(config.token);
})()
