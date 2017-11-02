exports.run = (client, message, Discord, prefix) => {
			message.reply("I have DM'd you successfully with help.");
		var embed = new Discord.RichEmbed()
		.setTitle("Help")
		.setColor('RANDOM')
		.setDescription("Here is all my information")
		.addField(prefix + "admin", "Displays Admin Commands")
		.addField(prefix + "util", "Displays Utility Commands")
		.addField(prefix + "server", "Displays Server Commands \n(Not Added Yet)")
		.addField(prefix + "botinfo", "Displays Information About the Bot \n(Not Added Yet)")
		return message.author.send(embed);
}
