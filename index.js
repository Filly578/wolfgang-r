const Discord = require('discord.js');
const bot = new Discord.Client();
const Attachment = require('discord.js');

const token = 'NjQ2ODMwNzEwMjUwMDEyNzIz.XdW2dg.wj8p3Koj7CMYD7jHMc3W6EoB2bY';

const PREFIX = '!';

var version = '1.0.1';

bot.on('ready', () =>{
    console.log('This Bot is Online!')
})

bot.on('message', msg=>{
  let args = msg.content.substring(PREFIX.length).split(" ");
    
 switch(args[0]){
     case 'user':
         const user = new Discord.RichEmbed()
         .settitle('User Information')
         .addfield('Player Name', msg.author.username, true)
         .addfield('Version', version, true)
         .addfield('Current Server', msg.guild.name, true)
         .setcolor(0xF1C40F)
         .setThumbnail(msg.author.avatarURL)
         msg.channel.sendEmbed(user);
    break;


    }      

})
