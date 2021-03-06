const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const { errLogChannelID } = require('../../config.json');

module.exports = {
    name: "ban",
    usage: ["Ban user ```[name | nickname | mention | ID] <[reason]>```"],
    aliases: [],
    category: "moderation",
    memberPermissions: ["BAN_MEMBERS"],
    botPermissions: ["BAN_MEMBERS", "SEND_MESSAGES"],
    //Settings for command
    nsfw: false,
    run: async (bot, message, args) => {
        try {
            if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You Dont Have The Permissions To Ban Users! - [BAN_MEMBERS]**");
            if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("**I Dont Have The Permissions To Ban Users! - [BAN_MEMBERS]**");
            if (!args[0]) return message.channel.send("**Please Provide A User To Ban!**")

            let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!banMember) return message.channel.send("**User Is Not In The Guild**");
            if (banMember === message.member) return message.channel.send("**You Cannot Ban Yourself**")

            var reason = args.slice(1).join(" ");

            if (!banMember.bannable) return message.channel.send(`**Cannot Ban ${banMember} Maybe His Role Higher Than My**`)

            banMember.send(`**Hello, You Have Been Banned From ${message.guild.name} for - ${reason || "No Reason"}**`).then(() =>
                message.guild.members.ban(banMember, { days: 7, reason: reason })).catch(() => {
                    message.guild.members.ban(banMember, { days: 7, reason: reason })
                })

            if (reason) {
                const sembed = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor(message.guild.name, message.guild.iconURL())
                    .setDescription(`**${banMember.user.username}** has been banned for ${reason}`)
                message.channel.send({embeds: [sembed]})
            } else {
                const sembed2 = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor(message.guild.name, message.guild.iconURL())
                    .setDescription(`**${banMember.user.username}** has been banned`)
                message.channel.send({embeds: [sembed2]})
            }

            const embed = new MessageEmbed()
                .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
                .setColor("#ff0000")
                .setThumbnail(banMember.user.displayAvatarURL({ dynamic: true }))
                .setFooter(message.guild.name, message.guild.iconURL())
                .addField("**Moderation**", "ban")
                .addField("**Banned**", banMember.user.username)
                .addField("**ID**", `${banMember.id}`)
                .addField("**Banned By**", message.author.username)
                .addField("**Reason**", `${reason || "**No Reason**"}`)
                .addField("**Date**", message.createdAt.toLocaleString())
                .setTimestamp();

            var sChannel = message.guild.channels.cache.get(errLogChannelID)
            if (!errLogChannelID) return;
            if (!sChannel) return;
            sChannel.send({embeds: [embed]})
        } catch (e) {
            return message.channel.send(`**${e.message}**`)
        }
    }
};