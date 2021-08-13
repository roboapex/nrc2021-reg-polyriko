const Discord = require('discord.js')
const bot = new Discord.Client();

bot.on("message", message => {
    args = message.content.split(" ")
    if (message.content.includes("?")){
        message.channel.send("Hi "+args[args.length-1].slice(0,-1)+"!")
    }
}) 

bot.login("")

//https://discord.com/oauth2/authorize?client_id=837613291735613490&scope=bot&permissions=35904