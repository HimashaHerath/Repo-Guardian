const fs = require('fs');
const path = require('path');

module.exports = (client) => {
    const commandFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        if (file !== 'index.js') {
            const command = require(path.join(__dirname, file));
            client.commands.set(command.name, command);
        }
    }
};
