const { RandomPHUB } = require('discord-phub');
const discord = require('discord.js');

//If you want to generate unique media each time else set it to false (by default it's false)
const nsfw = new RandomPHUB(unique = false);

/*
console.log(nsfw.db); //display all the database
console.log(nsfw.db.all); //display all the links of the databases
console.log(nsfw.categories); //display all the categories
console.log(nsfw.type); //display all the type
console.log(nsfw.totalElements); //display total elements in database
console.log(nsfw.typesByCategorie) //display all available type by categories
*/

const verify = nsfw.verifyTypeInCategory("gif", "pussy"); //verify if a type is available in a categorie
const pussy = nsfw.getRandomInCategory('pussy', "gif"); //will return a link to a pussy gif
const pussy2 = nsfw.getRandomInCategory('pussy'); //will return a link to a pussy media 
const rnd = nsfw.getRandom("gif"); //will return a link to a random media of any categorie with gif type
const rnd2 = nsfw.getRandom(); //will return a link to a random media of any categorie with any type
const cat = nsfw.getRandomCategory(); //will return a random category
const type = nsfw.getRandomType(); //will return a random category

module.exports = {
    name: "phub",
    category: "NSFW",
    description: "Searches phub + [allcategory]",
    run: async (client, message, args) => {

        var errMessage = "This is not an NSFW Channel";
        if (!message.channel.nsfw) {
            message.react('💢');

            return message.reply(errMessage)
                .then(msg => {
                    msg.delete({ timeout: 3000 })
                })
        }

        if (message.content.includes('allcategory') || message.content.includes('allcat')) {
            const mess = new discord.MessageEmbed()
                .setTitle("All Category ↴")
                .setColor('#FF0101')
                .setDescription(`:ideograph_advantage: ***${nsfw.categories}*** :ideograph_advantage:`)
                .setTimestamp()
                .setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
            return message.channel.send(mess);
        }

        if (message.content.toUpperCase().includes('LOLI') || message.content.toUpperCase().includes('GORE')) return message.channel.send('That kind of stuff is not allowed! Not even in NSFW channels!');

        var query = message.content.split(/\s+/g).slice(1).join(" ");
        async function phub() {
            const mess = new discord.MessageEmbed()
                .setTitle(`Category: ${query}`)
                .setColor("RANDOM")
                .setImage(await nsfw.getRandomInCategory(query).url)
                .setTimestamp()
                .setFooter("Requested by: " + message.member.displayName, message.author.displayAvatarURL({ dinamic: true }))
            return message.channel.send(mess);
        }
        phub().catch(err => {
            if (err.name == 'Unknow category' || err.name == 'Unknow category!')
                return message.channel.send(`No results found for **${query}**!`);
            else {
                const { errLogChannelID } = require('../../config.json');
                if(!errLogChannelID) return message.channel.send(err);
                message.react('❌')
                const logMessage = new discord.MessageEmbed()
                    .setTitle('Logs of CMD Errors | Crush | Broken')
                    .setColor('BLUE')
                    .setDescription(`${message.author.username} use CMD "***${phub.name}***"\nFrom server: ${message.guild.name}\n${err}`)
                    .setTimestamp()
                client.channels.cache.get(errLogChannelID).send(logMessage);
            }
        })
    }
}