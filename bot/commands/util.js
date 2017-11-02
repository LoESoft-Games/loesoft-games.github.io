exports.run = (client, message, Discord, prefix) => {
var embed = new Discord.RichEmbed()
.setTitle("Util")
.setDescription("Here are all of my utility commands")
.addField(prefix + "uinfo", "Displays information about a user")
.setColor('RANDOM')
return message.author.send(embed);
}