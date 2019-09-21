const commando = require('discord.js-commando');
const { commandPrefix, token, GIPHYtoken } = require('./gif,config.json');
global.bot = new commando.Client({
    commandPrefix
});
const ytdl = require('ytdl-core');

var GphApiClient = require('giphy-js-sdk-core')
Giphy = GphApiClient(GIPHYtoken)

bot.registry.registerGroups([['coin', 'coin']]);
bot.registry.registerGroups([['voice', 'voice']]);
bot.registry.registerGroups([['music', 'music']]);
bot.registry.registerGroups([[ 'main', 'main']]);
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname+'/commands');
global.servers = {};

bot.on('ready',function(message){
    console.log('gif bot!go!')
    bot.user.setActivity('"g! help" for help ', { type: 'WATCHING' })
      .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
      .catch(console.error);
      
})



bot.login(token);