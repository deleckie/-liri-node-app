// Node module imports needed to run the functions
var fs = require("fs"); //reads and writes files
var request = require("request");
var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require("spotify");
var movie = require("omdb");
var liriArgument = process.argv[2];

// linking to the twitter API through the NPM.
// var params = {
//     screen_name: 'nodejs'
// };
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//     if (!error) {
//         console.log(tweets);
//     }
// });
