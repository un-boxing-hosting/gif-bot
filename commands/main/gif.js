const commando = require('discord.js-commando');
const discord = require('discord.js');
const { commandPrefix, } = require('./gif,config.json');
//name



class  gifscommand extends commando.Command
{
     constructor(client)
    {

        super(client,{
             name: 'gif'+ 7,
             group:'main',
             memberName: 'gif'+7,
             description: ''
        });
    }
}


bot.on('message',message => 
{

    if (message.content.startsWith(`${commandPrefix}`)){ 
        var input = message.content;
       var userInput= input.substr('4');
    
       Giphy.search ('gifs' , {"q":userInput})
       .then((Response) => {
         var totalresponses = Response.data.length;
         var Responseindex = Math.floor((Math.random() * 10) + 1) % totalresponses;
         var Responsefinal = Response.data[Responseindex];
   
         message.channel.send("your gif",{
           files: [Responsefinal.images.fixed_height.url]
         })})}
})

// name
module.exports =  gifscommand;