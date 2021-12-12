const fs = require("fs");
const { MessageEmbed } = require("discord.js");
module.exports = {
    usages: ['ödeme'],
    async execute({ client, message, config, args }) {
        if (!config.OWNER.includes(message.author.id)) return;
        if (!args[0]) message.reply(`lütfen bir şey belirt! \n\n**Örneğin**\n\`${config.PREFİX}ödeme onayla\`\n\`${config.PREFİX}ödeme reddet\``).then(x => { x.delete({ timeout: 5000 }) });
        if (args[0] === "onayla") {
            if (config.PAYMENT === true) return message.reply("ödeme zaten onaylı!")
            client.user.setActivity(`Kado 💖 ${message.guild.name}`);
            config["PAYMENT"] = true;
            fs.writeFileSync("./config.json", JSON.stringify(config));
            message.channel.send(new MessageEmbed().setDescription("```Ödeme başarı ile onaylandı.```\n```Komutlar kullanıma açık.```").setFooter(`Kado 💖 ${message.guild.name}`).setThumbnail("https://cdn.discordapp.com/avatars/909748588815462420/91db4c3911c84995f9cd76c68a9ef057.png").setTimestamp())
        }
        if (args[0] === "reddet") {
            if (config.PAYMENT === false) return message.reply("ödeme zaten reddedilmiş!")
            client.user.setActivity(`Başarısız ödeme yüzünden bot kullanımı devredışı.`);
            config["PAYMENT"] = false;
            fs.writeFileSync("./config.json", JSON.stringify(config));
            message.channel.send(new MessageEmbed().setDescription("```Ödeme başarı ile reddedildi.```\n```Komutlar kullanıma kapalı lütfen faturanızı ödeyin!```").setFooter(`Kado 💖 ${message.guild.name}`).setThumbnail("https://cdn.discordapp.com/avatars/909748588815462420/91db4c3911c84995f9cd76c68a9ef057.png").setTimestamp())
        }
    }
};