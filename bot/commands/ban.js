exports.run = (client, message, Discord, prefix) => {
            let loe = message.guild.roles.find('name', 'LoESoft');
            let logs = message.guild.channels.find('name', 'bot-logs');
            const args = message.content.split(" ").slice(2);
            let areason = args.join(" ");
            let ban = message.mentions.users.first();
            let member = message.mentions.members.first();
            let author = message.guild.member(message.author);
        
            if(!loe) {
                var embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setDescription(':x: Invalid :x:')
                .addField('Info', 'You do not have the `BAN_MEMBERS` permissions.')
                return message.channel.send(embed);
            }
        
            if(ban === 0) {
                var embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setDescription(':x: Invalid :x:')
                .addField('Info', 'You did not mention a user to ban.')
                return message.channel.send(embed);
            }
		if (author.highestRole.position < member.highestRole.position){
                     var embed = new Discord.RichEmbed()
                     .setDescription(":x: Invalid :x:")
                     .setColor('RANDOM')
                     .addField("Info", "Your role is either the same or lower than the user you wish to ban.")
                     return message.channel.send(embed);
            }







            
                   if(!areason) {
                    var embed = new Discord.RichEmbed()
                     .setDescription(":x: Invalid :x:")
                     .setColor('RANDOM')
                     .addField("Info", "You did not supply a reason to ban the user.")
                     return message.channel.send(embed);
                 }
        
                 message.guild.member(ban).ban();
                 var embed = new Discord.RichEmbed()
                 .setDescription(":white_check_mark: Ban Sucess :white_check_mark:")
                 .addField("Staff Member", message.author.tag, true)
                 .addField("User", ban, true)
                 .addField("Reason", areason)
                 .setColor('RANDOM')
                return logs.send(embed);
            }
