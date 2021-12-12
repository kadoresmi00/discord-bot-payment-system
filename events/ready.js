const config = require("../config");

module.exports = {
    name: 'ready',
    async execute(client) {
        client.user.setActivity(config.STATUS || 'Kado was here.');
    }
};