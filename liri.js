#!/usr/bin/env node

/**
 * Module dependencies.
 */

// Make sure to install npm packeges listed below:

// npm install --save node-spotify-api
// npm install twitter
// npm install commander --save
// npm install inquirer


var program = require('commander');
// var inquirer = require('inquirer');
//
// inquirer.prompt([/* Pass your questions in here */"Hi there. what would you like to do?", "Look up a song on spotify", "Look up the latest Tweets by theVoiseOfLiri", "Look up a movie on OMDB",]).then(function (answers) {
//     // Use user feedback for... whatever!!
// "mytweets", "spotifyThisSong", "movieThis"
// });

program
    .version('0.1.0')
    .option('-t, --mytweets', 'Go get my latest tweets')
    .option('-s, --spotifyThisSong', 'thats my JAM!')
    .option('-m, --movieThis', 'Lights, Camera, Action')
    .option('-d, --doWhatItSays', 'Dont make me ask twice...')
    .parse(process.argv);

// console.log('you ordered a pizza with:');
// if (program.peppers) console.log('  - peppers');
// if (program.pineapple) console.log('  - pineapple');
// if (program.bbqSauce) console.log('  - bbq');
// console.log('  - %s cheese', program.cheese);

if (program.mytweets) {

    var keys = require("./keys.js");
    var Twitter = require('twitter');

    var client = new Twitter({
        consumer_key: keys.consumer_key,
        consumer_secret: keys.consumer_secret,
        access_token_key: keys.access_token_key,
        access_token_secret: keys.access_token_secret
    });

    var params = {
        screen_name: 'theVoiceOfLiri'
    };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            //
            // Iterate through the 'tweets' array
            // And then print some stuff about each tweet
            //
            tweets.forEach(tweet => {

                console.log('----------------------------------------------------------');
                console.log(tweet.created_at);
                console.log(tweet.text);
                console.log('----------------------------------------------------------');

            });

        }
    });

}

if (program.spotifyThisSong) {

    // search: function({ type: 'track', query: 'My search query', limit: 20 }, callback);
// developer.spotify.com - Spotify API docs - request over search

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: '54202f0a90124fa58c7bea88bbfb163a',
  secret: '5143f0123e3442feaa6c8d1b071cdbc2'
});

spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err);
});
}
