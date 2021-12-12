module.exports = {
    usages: ['testcommand'],
    async execute({ client, message, config, MessageEmbed }) {
        message.channel.send("Hello world!");
    }
};