const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "l!";

client.on("ready", () => {
	console.log("Successfully booted and ready for action!");
	client.user.setGame(prefix + "help / LoE")
});


client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.startsWith(prefix)){
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, Discord, prefix);
  } catch (err) {
    console.error(err);
  }
 }
});



client.login(process.env.BOT_TOKEN);
