const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');

function play(connection, message)
{
    var server = servers[message.guild.id];
    server.dipatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dipatcher.on("end", function(){
        if(server.queue[0])
        {
            play(connection,message)
        }
        else
        {
            connection.disconnect();
        }
    });
}

class joinchannelcommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
             name: 'join',
             group:'voice',
             memberName: 'join',
             description: 'joins channel'
        });
    }

    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                if(!servers[message.guild.id])
                {
                    servers[message.guild.id] = {queue: []}
                }
                message.member.voiceChannel.join()
                    .then(connection =>{
                        var server = servers[message.guild.id];
                        message.reply("joined");
                        server.queue.push(args);
                        play(connection, message);
                    })
            }
        }
        else
        {
            message.reply("you have to be in voice channale")
        }
    }
}   

module.exports = joinchannelcommand;