const Discord = require("discord.js");

const TOKEN = "NTAwMDQ4MzkxOTI1OTIzODQw.DqZLnA.X29yeoDK-iEv01D6AraqOBxYej8";
const PREFIX = "!";



var bot = new Discord.Client();

bot.on("ready", function() 
{
	console.log("ready");
});

bot.on("guildMemberAdd", function(member)
{
	member.guild.channels.find("name", "welcome").sendMessage(member.toString() + " Welcome and be sure to read #to-begin")
});


bot.on("message", function(message)
{
	if (message.author.equals(bot.user)) return;

	if (!message.content.startsWith(PREFIX)) return;

	var args = message.content.substring(PREFIX.length).split(" ");

	switch (args[0])
	{
		case "commands":
		message.channel.sendMessage("The commands are help, role");
	case "Help":
		message.channel.sendMessage("Just type ! before one of these commands:Help1: Can't acces the server, Help2: Random question, Help3: Another played did something bad, Help4: Issue in discord");
		break;
	case "Help1":
		message.channel.sendMessage("@mod Help i can't acces the server");
		break;
	case "Help2":
		message.channel.sendMessage("@mod I have a random question");
		break;
	case "Help3":
		message.channel.sendMessage("@mod This is a report for a player");
		break;
	case "Help4":
		message.channel.sendMessage("@mod Got an issue in discord");
		break;
	case "help":
		message.channel.sendMessage("Be sure to type Help and not help");
		break;
	case "role":
		message.channel.sendMessage("Type !marine to become a marine, !pirate for pirate, !bounty_hunter for bounty hunter");
		break;
	case "marine":
	if (message.member.roles.find("name", "pirate")) return;
	if (message.member.roles.find("name", "bounty hunter")) return;
	if (message.member.roles.find("name", "marine")) return;
		let memberRole_1 = message.member.guild.roles.find("name", "marine");
		message.member.addRole(memberRole_1);
		message.channel.sendMessage("You're a marine now! You can now use the special faction chat and people will recognise you as a marine.");
		break;
	case "pirate":
	if (message.member.roles.find("name", "pirate")) return
	if (message.member.roles.find("name", "bounty hunter")) return;
	if (message.member.roles.find("name", "marine")) return;
		let memberRole_2 = message.member.guild.roles.find("name", "pirate");
		message.member.addRole(memberRole_2);
		message.channel.sendMessage("You're a pirate now! You can now use the special faction chat and people will recognise you as a pirate.");
		break;
	case "bounty_hunter":
	if (message.member.roles.find("name", "pirate")) return;
	if (message.member.roles.find("name", "bounty hunter")) return;
	if (message.member.roles.find("name", "marine")) return;
		let memberRole_3 = message.member.guild.roles.find("name", "bounty hunter");
		message.member.addRole(memberRole_3);
		message.channel.sendMessage("You're a bounty hunter now! You can now use the special faction chat and people will recognise you as a bouunty hunter.");
		break;
	default:
		message.channel.sendMessage("Error 404");
	}

});

bot.login(TOKEN);
client.login(process.env.BOT_TOKEN);

// DO NOT USE THIS BOT WITHOUT PERMISSION IN YOUR OWN SERVER
