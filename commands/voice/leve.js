const commando = require('discord.js-commando');

class leavechannelcommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
             name: 'leave',
             group:'voice',
             memberName: 'leave',
             description: 'leaves channel'
        });
    }

    async run(message, args)
    {
        if(message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect();
        }
        else
        {
            message.reply("left!")
        }
    }
}   

module.exports = leavechannelcommand;