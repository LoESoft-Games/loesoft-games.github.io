exports.run = (client, message, Discord, prefix) => {
if (message.channel.type === "dm") return;
  
  let member = message.mentions.members.first();
  let author = message.guild.member(message.author);
  let aID = "257351188310130698";
  const args = message.content.split(" ").slice(2);
     let reason = args.join(" ")
   if(!member){ 
     
     var embed = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setDescription(':x: Invalid :x:')
     .addField('Info', 'You did not mention a user to ban.')
     return message.channel.send(embed);
   } else if (!reason) {
    var embed = new Discord.RichEmbed()
                     .setDescription(":x: Invalid :x:")
                     .setColor('RANDOM')
                     .addField("Info", "You did not supply a reason to ban the user.")
                     return message.channel.send(embed);
   } else if (author.highestRole.position < member.highestRole.position){
    var embed = new Discord.RichEmbed()
                     .setDescription(":x: Invalid :x:")
                     .setColor('RANDOM')
                     .addField("Info", "Your role is either the same or lower than the user you wish to ban.")
                     return message.channel.send(embed);
   } else if(author.hasPermission(2)) {
     
    let name = message.guild.name
    member.send("Hey. You have been kicked from " + name + " for: `" + reason + "`. Too bad, so sad.");
   member.kick(reason);
   let channel = message.guild.channels.find(`name`, `bot-logs`);
     var embed = new Discord.RichEmbed()
                 .setDescription(":white_check_mark: Kick Sucess :white_check_mark:")
                 .addField("Staff Member", message.author.tag, true)
                 .addField("User", ban, true)
                 .addField("Reason", reason)
                 .setColor('RANDOM')
                return channel.send(embed);
  }else { message.reply(`it seems you don’t have permission to kick users.`);
        }
}
