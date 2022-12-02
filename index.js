require('dotenv/config');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent
  ]
});

client.login(process.env.TOKEN);

client.on('ready', () => {
  console.log('The bot is ready');
});

client.on('messageCreate', msg => {
  if (msg.content.startswith === 'ping') {
    msg.reply('pong');
  }
});
