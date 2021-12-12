const { Client, Collection } = require('discord.js');
const fs = require('fs');
const config = require('./config.json');
const client = new Client();
const MessageEmbed = require('discord.js');
client.commands = new Collection();


const commands = fs.readdirSync('./commands', { encoding: 'utf-8' });
for (let commandFile of commands) {
    let command = require(`./commands/${commandFile}`);
    client.commands.set(command.usages[0], command);
}

const events = fs.readdirSync('./events', { encoding: 'utf-8' });
for (let eventFile of events) {
    let event = require(`./events/${eventFile}`);
    client.on(event.name, (...args) => event.execute(client, ...args));
}


client.login(config.TOKEN).then(c => console.log(`${client.user.tag} Signed in!`)).catch(err => console.error("Token Failed!"));