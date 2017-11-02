exports.run = (client, message, Discord, prefix) => {
if (message.channel.type === "dm") return;
let user = message.mentions.members.first();
    let uuser = user.user;
    let bott = uuser.bot.toString();
    let name = uuser.username.toString();
    let dname = uuser.discriminator.toString();
    let roles = user.roles.map(role => role.name).join(', ');
    let id = uuser.id.toString();
    let status = uuser.presence.status.toString();
    if(status == "dnd"){ status = "Do Not Disturb"}else if(status == "online"){status = "Online"}else if(status == "idle"){status = "Idle"}else{ status = "Offline"}
    
    var embed = new Discord.RichEmbed()
    .setDescription("" + user.toString() + "'s Info")
    .setThumbnail(uuser.avatarURL)
    .addField("True Name", name + "#" + dname)
    .addField("Name", uuser)
    .addField("Roles", roles)
    .addField("Bot", bott)
    .addField("ID", id)
    .addField("Status", status)
    .setColor('RANDOM');
   message.channel.send(embed);
}
