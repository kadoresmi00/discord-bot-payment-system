const config = require('../config.json');
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'message',
    execute(client, message) {
        if (message.author.bot || !message.guild || !message.content.startsWith(config.PREFİX)) return;
        const args = message.content.slice(config.PREFİX.length).trim().split(' ');
        const commandName = args.shift().toLowerCase();
        const command = client.commands.find((command) => command.usages.includes(commandName));
        if (!command) return
        if (commandName === "ödeme") {
            command.execute({ message, client, config, args, MessageEmbed });
        } else {
            if (config.PAYMENT === false) return message.channel.send(new MessageEmbed().setDescription("```Komut Kullanımı Devre Dışı.```\n```Komut kullanımı bot ödeme durumundan dolayı kapatılmıştır.```").setFooter(`Kado 💖 ${message.guild.name}`).setThumbnail("https://cdn.discordapp.com/avatars/909748588815462420/91db4c3911c84995f9cd76c68a9ef057.png").setTimestamp())
            command.execute({ message, client, config, args, MessageEmbed });
        }
    }
};