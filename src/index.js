//I used a .json file here but you can use "".env" too.
//if you don't know how to install it you can install it using 
//"npm install dotenv"
//and then you need to require it instead of the config.json.
//IMPORTANT: DON'T FORGOT TO CHANGE THE  CONTENT OF 'config.json' BEFORE USING IT!
const {token} = require('../config.json')
//Install the library first using "discord install discord.js"
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

//this is currently not working because id ont know how to do it :(
//if you can help me please send me an email at: crxmsoncontact@gmail.com .
function roleslog(interaction) {
//const created = `[CREATED ROLE:] `;
  const edited = `[EDITED ROLE:] `;
//const deleted = `[DELTED ROLE:] `;


  client.on('roleUpdate', (oldRole, newRole) => {
    if (oldRole.name !== newRole.name) {
      console.log(`${edited}Role name was edited from "${oldRole.name}" to "${newRole.name}"`);
      interaction.reply(`${edited}Role name was edited from "${oldRole.name}" to "${newRole.name}"`);
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

  //as i said this one currently doesn't work so you can just comment it 
  //or if you was able to fix it please inform me(I'm still a beginner , so you shouldn't be amazed how dumb I'm if the solution is so obvious and easy.)
  if (interaction.commandName === 'rolelogs') {
    return interaction.reply(roleslog());
  } else
  {
    return interaction.reply("[EXITING]: it appears that there no role logs..")
  }
});



//log to your bot using your token
//IMPORTANT: Remember to change it if you're using .env instead of json.
client.login(token); 