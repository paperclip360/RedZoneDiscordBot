const Discord = require('discord.js');
const client = new Discord.Client();
const { bot_token } = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === 'Yo Ray') {
		message.channel.send(`What's good ${message.author}.... sike don't care. Call me Finkle`);
	}
});
// need to connect to NFL API www.api.nfl.com 
// NFL API no available to public, must request registration
// going to need to scrape the NFL website

// need to connect to Yahoo Fantasy api, @Mike maybe you can work on getting the bot connected?

// pull list of game ids

// pull players from each of the returned game ids

// match pulled players to Yahoo API league owners

// polling query NFL API for videos based on game id and video type = scoring plays

// post any scoring videos to channel and tag league owner

// need to decide if we want to log data to a database or just write code to read the channel thread in order to avoid duplicate posts

// need to schedule this job to run every x intervals

client.login(bot_token);