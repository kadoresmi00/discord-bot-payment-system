module.exports = {
    usages: ["eval"],
    async execute({ client, message, config, args }) {
        if (!config.OWNER.includes(message.author.id)) return;
        if (!args[0]) return message.reply("lütfen deniceğin kodu belirt :tada:").then(x => x.delete({ timeout: 3000 }));
        try {
            let code = eval(args.join(" "));
            if (typeof code !== "string")
                code = require("util").inspect(code, { depth: 0 });
            let çıkış = `\`\`\`js\n${code}\n\`\`\``;
            message.channel.send(çıkış);
        } catch (e) {
            message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
        }
    },
};