const fs = require('fs');
const path = require('path');

module.exports = (client) => {
    const eventFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.js'));

    for (const file of eventFiles) {
        if (file !== 'index.js') {
            const event = require(path.join(__dirname, file));
            const eventName = file.split('.')[0];
            client.on(eventName, event.bind(null, client));
        }
    }
};
