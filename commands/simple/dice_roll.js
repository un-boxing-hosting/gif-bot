const commando = require('discord.js-commando');

class dicerollcommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
             name: 'roll',
             group:'coin',
             memberName: 'roll',
             description: 'roll a dise of rour chousing'
        });
    }

    async run(message, args)
    {
        var diceroll = Math.floor(Math.random() * 6) + 1;
        message.reply("dice landed on"+diceroll);
    }
        
}

module.exports = dicerollcommand;