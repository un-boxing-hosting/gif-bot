const commando = require('discord.js-commando');

class coinflipcommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
             name: 'flip',
             group:'coin',
             memberName: 'flip',
             description: 'flips a coin'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0)
        {
            message.reply("heads!");
        }
        else
        {
            message.reply("tails!");
        }
    }
}

module.exports = coinflipcommand;