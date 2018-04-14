const Discord = require('discord.js');
const client = new Discord.Client();
const spy = new Discord.Client();
const db = require ('quick.db');
const cat = "http://random.cat/meow"
const snek = require('snekfetch')
const agree    = "✅";
const disagree = "❎";
const urban = require ('urban')
const snekfetch = require('snekfetch');

client.on('ready',() => {
    console.log('I\'m Online\nI\'m Online');
    client.user.setGame(`${games}`)
});

var ree = 'REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE :angry:'
var games = "Do you know what is gay? your mom."
var prefix = "adaa"
var bwords = "fuck"
var eightball = [ 
    "yes!",
    "no...",
    "maybe?",
    "probably",
    "I don't think so.",
    "never!",
    "you can try...",
    "up to you!",
]

client.on('message', message => {
	let args = message.content.split(' ').slice(1);
	var result = args.join(' ');

	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;

	if (message.content.startsWith(prefix + 'ping')) {
		message.channel.sendMessage(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
    } else

    if (message.content.startsWith(prefix + 'rules')) {
        message.channel.sendMessage('1. no spam, 2. no nsfw, 3. no normies, 4. no bad content (that rules goes to all servers with me) ');
    }



    if (message.content.startsWith('gay')) {
        message.channel.sendMessage('no u');
    }
    
    if (message.content.startsWith(prefix + 'userinfo')) {
    let memberInfo = message.mentions.members.first();

    if(!memberInfo){
      var userinf = new Discord.RichEmbed()
          .setAuthor(message.author.username)
          .setThumbnail(message.author.avatarURL)
          .setDescription("This is the user's info!")
          .setColor(0x00FF00)
          .addField("Full Username:", `${message.author.username}#${message.author.discriminator}`)
          .addField("ID:", message.author.id)
          .addField("Created At:", message.author.createdAt)
  
          message.channel.send(userinfo);
  
    }else{
  
      var userinfo = new Discord.RichEmbed()
          .setAuthor(memberInfo.displayName)
          .setThumbnail(memberInfo.user.avatarURL)
          .setColor(0x00FF00)
          .addField(" Username:", `${memberInfo.user.username}#${memberInfo.user.discriminator}`)
          .addField("ID:", memberInfo.id)
          .addField("Created At:", memberInfo.user.createdAt)
  
          message.channel.send(userinfo);
    }
  }

  if (message.content.startsWith(prefix + 'potato')) {
    if (!args[0]) {
        message.reply(`Please mention a user.`)
        return;
    }

    if (!message.mentions.members.first()) {
        message.reply(`I couldn't find a user with that name.`)
        return;
    }

    if (message.content.includes(`<@${message.author.id}>`)) {
        message.reply(`You cannot give a potato to yourself!`)
        return;
    }

    message.channel.send(`**${message.author.username} gave  ${message.mentions.users.first().username} a potato! :potato:**`)
  }
  
  if (message.content.startsWith(prefix + 'serverinfo')) {
    var serverinfoembed = new Discord.RichEmbed()
    .setDescription(` **${message.guild.name}** (ID: ${message.guild.id})\nOnline Members: ${message.guild.members.filter(member => member.presence.status !== 'offline').size}`)
    .addField(`Users `, ` Owner: ${message.guild.owner.user.tag}\n ${message.guild.memberCount} members`)
    .addField(` Channels`, ` ${message.guild.channels.size} channels (Total)`)
    .addField(` Roles`, `  ${message.guild.roles.size} roles`)
    .addField(` Created At`, ` ${message.guild.createdAt}`)
    .setThumbnail(message.guild.iconURL)
    
    message.channel.send(serverinfoembed);
    
    }

    
    if (message.content.startsWith(prefix + 'clear')) {
    if(message.member.hasPermission("ADMINISTRATOR")) {
        let messagecount = parseInt(args[0]);
      
        if(isNaN(messagecount)) return message.channel.send(":thumbs: " + "| Please Enter A Number!");
      
        if(messagecount > 10000){
          message.channel.send(":thumbsdown: " + "| Sorry, You can only clean up to 9999 messages ")
        }else if(messagecount < 2 ) {
          message.channel.send(":thumbsdown: " + "| Sorry, You can only clean up to 9999 messages ")
        } else {

        }{
          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages, true));
        }
      } else {
        return message.reply(":thumbsdown: " + "| You need to have the \"ADMINISTRATOR\" Permission")
      }

        message.channel.send(':thumbsup:')

      }


	if (message.content.startsWith(prefix + 'send')) {
		client.channels.get('245491978601627648').sendMessage('Hello from second channel!');
    } else



    
    if (message.content.startsWith(prefix + 'serverroles')) {
    ROLEZZ = message.guild.roles.array()
  
    var ROLES = "";
  
      ROLEZZ.forEach(function(element){
          ROLES += element.name + "\n"
      });
      
      message.channel.send("```" + "\n" +
                           "---------------------------------" + "\n" +
                           "---------------------------------" + "\n" +
                           `Server Roles: ${ROLES}` + "```");
  
  }

	if (message.content.startsWith(prefix + 'info')) {
		message.channel.sendMessage('Hello there! I am a simple reaction bot made by Random use ~help for a list of commands.');
	}

	if (message.content.startsWith(prefix + 'help')) {
		message.channel.sendMessage('A reaction list that you can use! thinkcap ohboi kek smug lul thinkcap dab god oof icanmineyourgirl  happy hype dance, use ~ before the words. so the bot will run the function.')
    }


      module.exports.run = async (client, message, args) => {

      }

      if (message.content.startsWith(prefix + 'botinfo')) {
      let bicon = client.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setDescription("Bot Info :tm:")
      .setColor("#15f153")
      .setThumbnail(bicon)
      .addField("Bot Name", client.user.username)
      .addField("Created On", client.user.createdAt);
  
      message.channel.send(botembed);
  }

  if (message.content.startsWith(prefix + 'mom')); {
      message.delete();
    message.channel.send('adaamom <@268159757016236032> <@244969454600060928> <@321501623966892032> <@275734416230318080>  <@304709385303752704>  <@102123398565494784>');
  }

  if (message.content.startsWith(prefix + 'mom')) {
      message.channel.send('adaamom <@268159757016236032> <@244969454600060928> <@321501623966892032> <@275734416230318080>  <@304709385303752704>  <@102123398565494784>');
  }

  if (message.content.startsWith(prefix + 'adaamom <@268159757016236032> <@244969454600060928>')) {
      message.channel.send('adaamom <@268159757016236032> <@244969454600060928> <@321501623966892032> <@275734416230318080>  <@304709385303752704>  <@102123398565494784>');
  }

  
  if (message.content.startsWith(prefix + 'role')) {
  if(message.member.hasPermission("ADMINISTRATOR")) {
    let member2 = message.mentions.members.first();
    if(!member2) return message.reply(":x: " + "| You need to mention an user");

    let muteRole2 = message.mentions.roles.first();
    if(!muteRole2) return message.reply(":x: " + `| I cant find a role with that name`);
    
    let time2 = args[2];
    if(!time2) {
      member2.addRole(muteRole2.id);
      message.channel.send(member2 + ` :thumbsup: ` + muteRole2.name);
    }else {
      member2.addRole(muteRole2.id);
      message.channel.send(member2 + ` :thumbsup: : ` + muteRole2.name + ` for: ${ms(ms(time2), {long: true})}`);

      setTimeout(function(){
        member2.removeRole(muteRole2.id);
        message.channel.send(member2 + ` Rip your role ${ms(ms(time2), {long: true})}`)

      }, ms(time2));

      };
      }else {
        return message.reply(":thumbsdown: " + "| You need to have the \"ADMINISTRATOR\" Permission")
      };
}


    if (message.content.startsWith(prefix + 'ohboi')) {
		message.channel.sendMessage('https://cdn.discordapp.com/attachments/430179758442151938/431223231454642176/Z.png')
    }




    var hd = [
        "Heads :thumbsup:",
        "Heads :thumbsup:"
    ];

    if (message.content.startsWith(prefix + 'coinflip')) {
    message.channel.send(message.author.toString() + " You got: " + (hd[Math.floor(Math.random() * hd.length)]));
}
    
	


	  

	if (message.content.startsWith(prefix + 'lul')) {
		message.channel.sendMessage('https://cdn.discordapp.com/attachments/430179758442151938/431224750400995329/9k.png');
    }
    
 


    if (message.content.startsWith(prefix + 'dreamy')) {
        message.channel.sendMessage('Dreamy, known more as Dreamyimpy. is one of my greatest friends, he have a channel check it out - > https://www.youtube.com/channel/UCOTdVx-iCzWkGq4qbJqtJ8g');
    
            if (message.mentions.users.first()) {
                msg = `🏧  |  **${message.author.username}, you have given your daily credits to ${defineduser.username}**!`;
                if (message.mentions.members.first().user.bot) return message.channel.send(`<:denied:429405611604574209>  |  **${message.author.username}**, you cannot give your dailies to bots!`);
            }

            if (!message.mentions.users.first()) msg = `🏧  |  **${message.author.username}, you have claimed your dailies!** (**$${amount}**)`;

            message.channel.send(msg);
            db.set(`lastDaily_${message.author.id}`, Date.now());
            db.add(`money_${defineduser.id}`, amount);
        }


	if (message.content.startsWith(prefix + 'thinkcap')) {
		message.channel.sendMessage('https://cdn.discordapp.com/attachments/429007520355581962/431226344903540746/emote.png');
	}



	if (message.content.startsWith(prefix + 'dab')) {
		message.channel.sendMessage('https://cdn.discordapp.com/attachments/430179758442151938/431225805641613322/images.png');
	}

	if (message.content.startsWith(prefix + 'god')) {
		message.channel.sendMessage('https://cdn.discordapp.com/avatars/226480771634823168/4b3aa3f5899674b2c9e863147905befa.jpg?size=1024');
    }
    
   	if (message.content.startsWith(prefix + 'oof')) {
		message.channel.sendMessage('https://cdn.discordapp.com/attachments/430179758442151938/431226841806667776/2Q.png');
    }



	if (message.content.startsWith(prefix + 'icanmineyourgirl')) {
		message.channel.sendMessage('https://cdn.discordapp.com/attachments/430179758442151938/431227054802075670/9k.png');
	}



	if (message.content.startsWith(prefix + 'faggot')) {
		message.channel.sendMessage("Abfan is a great friend and he have a youtube channel so check it - > https://www.youtube.com/user/Boltrock/featured");
    }
    
  
	if (message.content.startsWith(prefix + 'happy')) {
		message.channel.sendMessage('https://cdn.discordapp.com/attachments/430179758442151938/431225424819781633/Z.png');
	}

	if (message.content.startsWith(prefix + 'hype')) {
		message.channel.sendMessage('https://cdn.discordapp.com/attachments/430179758442151938/431225125510053889/hype.gif');
	}

	if (message.content.startsWith(prefix + 'dance')) {
		message.channel.sendMessage('https://cdn.discordapp.com/attachments/430179758442151938/431227486047567873/a.gif');
    }
    



	if (message.content.startsWith(prefix + 'say')) { // creates command say
        if (!message.member.roles.some(r=>["Admin"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!");
        var sayMessage = message.content.substring(4)
        message.delete();
        message.delete().catch(O_o=>{});
        message.channel.send(sayMessage);
    }

    client.on('serverNewMember', function(server, user) {
        client.channel.sendMessage(server, "A new member has arrived. Welcome, " + user.username + " to " + server.name + ". Type adaahelp for commands.");
    });
    

	if (message.content.startsWith(prefix + '8ball')) { // creates the command 8ball
        if (args[1] != null) message.reply(eightball[Math.floor(Math.random() * eightball.length).toString(16)]); // if args[1], post random answer
        else message.channel.send(" what is your question?"); // if not, error
    }

   

	if (message.content.startsWith(prefix + 'setgame')) {
		if (message.author.id !== '146944503092084736') return message.channel.send(`:x:  |  Bot owner only...`)
		message.channel.sendMessage(':thumbsup:');
		if (!result) {
			result = null;
		}
		client.user.setGame(result);
	} else

	if (message.content.startsWith(prefix + 'setstatus')) {
		if (message.author.id !== '146944503092084736') return message.channel.send(`:x:  |  Bot owner only...`)
		message.channel.sendMessage(':thumbsup:');
		if (!result) {
			result = 'online';
		}
		client.user.setStatus(result);
	} else

	if (message.content.startsWith(prefix + 'foo')) {
		message.channel.sendMessage('bar');
	}
		
	if (message.content.startsWith(prefix + 'gay')) {
		message.channel.sendMessage('<@389223568413687815> <@268159757016236032>');
	}

	if (message.content.startsWith(prefix + 'fucker')) {
		message.delete();
	}

	if (message.content.startsWith(prefix + 'partnersservers')) 
		message.channel.sendMessage('https://discord.gg/QCSJgN3 https://discord.gg/hyTrSBS https://discord.gg/3SfpjCM ');
	    
    if (message.content.startsWith(prefix + 'wakeuptheowner')) {
        message.channel.sendMessage('They are calling you <@146944503092084736>');
	}
	

	spy.on('message', message => {
		if (message.channel.type === 'dm') return;
		if (message.guild.id !== '366019576661671937') return;
	
		var spymsg = new Discord.RichEmbed()
		.setTitle(`Message Sent in ${message.guild.name} (Server ID: ${message.guild.id})`)
		.setDescription(`**User:** ${message.author.tag} (User ID: ${message.author.id})\n**Content:** ${message.content}`)
		.setColor(0xf9db5f)
	
		spy.channels.get('427600839444791296').send(spymsg)
		
	});

    if (message.content.startsWith(bwords)) {
        message.delete();
        message.channel.sendMessage('Do not say these type of words!')
	}
    console.log(`${message.author.tag} (ID: ${message.author.id} sent a message in ${message.guild.name} with the content: ${message.content}.`) 

	if (message.content.startsWith(prefix + 'pingloop')) {
		if (message.author.id !== '146944503092084736') return message.channel.send(`:x:  |  Bot owner only...`)
		message.channel.sendMessage('tbh<@146944503092084736>');
	}

	if (message.content.startsWith(prefix + '<@146944503092084736>')) {
		message.channel.sendMessage('tbh<@146944503092084736>');
    }
    
    if (message.content.startsWith(prefix + 'uptime')) {
        message.channel.send('Not Finished Yet :tm:')
    }

	if (message.content.startsWith(prefix + 'dice')) {
	function generateHex() {
        return '#'+Math.floor(Math.random()*16777215).toString(16);
    }

    function dicenum() {
        var rand = ['1', '2', '3', '4', '5', '6', '1', '2', '3', '4', '5', '6'];
    
        return rand[Math.floor(Math.random()*rand.length)];
    }

    var rolldice = new Discord.RichEmbed()
    .setTitle(":game_die: Dice")
    .setDescription(`You rolled a **${dicenum()}!**`)
    .setColor(generateHex())

    message.channel.send(rolldice)

}


	
	if (message.content.startsWith(prefix + 'importantthing')) {
        if (message.author.id !== '146944503092084736') return message.channel.send(`:x:  |  Bot owner only...`);
        message.delete();
		message.channel.sendMessage('✅Annoucement Time @everyone! ✅');
		message.channel.sendMessage('This is an automatic message by the dev ');
		message.channel.sendMessage('Dont complain about the ping!');
	}

});

client.login('NDIyNTI5ODM2NzU4ODU5Nzc3.DbQiJg.6MhJy8nCUF4OcdRL6rowVwig4oc');
