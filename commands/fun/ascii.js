var figlet = require('figlet');
const utils = require('../../utils');

module.exports = {
  name: "ascii",
  usage: ["Uh-oh FUNN ```[command] + [your text]```"],
  aliases: [],
  category: "fun",
  memberPermissions: [],
  botPermissions: ["SEND_MESSAGES"],
  //Settings for command
  nsfw: false,
  run: async (client, message, args) => {
    var maxLen = 100 // You can set the maximum number of letters yourself

    if (args.join(' ').length > maxLen) return message.channel.send(`The max length is ${maxLen}!`)

    if (!args[0]) return message.channel.send('Please enter some text.');

    figlet(`${args.join(' ')}`, function (err, data) {
      if (err) {
        console.log('k...');
        console.dir(err);
        return;
      }
      message.channel.send(`${data}`, { code: 'AsciiArt' });
    });
  }
};