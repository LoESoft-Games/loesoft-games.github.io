exports.run = (client, message, Discord, prefix) => {
  var embed = new Discord.RichEmbed()
  .setTitle("Admin")
  .setDescription("Here are all of my administrative commands")
  .addField(prefix + "ban", "Bans a user. \nEx. " + prefix + "ban (mention a user) (reason) \nRequires permission to ban users.")
  .addField(prefix + "kick", "Kicks a user. \nEx. " + prefix + "kick (mention a user) (reason) \nRequires permission to kick users.")
  .setColor('RANDOM')
  return message.author.send(embed);
}
