const {token} = require('../config.json')
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});


function roleslog(interaction) {
  console.log('Role logs requested by:', interaction.user.tag);

  client.on('roleUpdate', (oldRole, newRole) => {
    if (oldRole.name !== newRole.name) {
      console.log(`Role name was edited from "${oldRole.name}" to "${newRole.name}"`);
      interaction.reply(`Role name was edited from "${oldRole.name}" to "${newRole.name}"`);
    }
    // You can add more checks for other role properties (e.g., color, permissions, etc.)
  });
}



client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'help') {
    return interaction.reply(`The bot is still on developement message the **owner** for more info!`);
  }

  if (interaction.commandName === 'hey') {
    return interaction.reply('hey!');
  }
  console.log(`The message is: ${interaction.commandName}`);  

  if (interaction.commandName === 'ping') {
    return interaction.reply(`You've pinged the bot!   **Pong**`);
  }
  if (interaction.commandName === 'rolelogs') {
    return interaction.reply(roleslog());
  } else
  {
    return interaction.reply("[EXITING]: it appears that there no role logs..")
  }
});




client.login(token);