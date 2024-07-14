const { REST, Routes } = require('discord.js');
const {token , guild_id, app_id} = require('../config.json');

const commands = [
  {
    name: 'help',
    description: 'Display some help for new users or as a refresher for originals.',
  },
  {
    name: 'rolelogs',
    description: 'Show the logs of the roles!',
  },
  {
    name: 'ping',
    description: 'Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      Routes.applicationGuildCommands(
        app_id,
        guild_id
      ),
      { body: commands }
    );

    console.log('Slash commands were registered successfully!');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();