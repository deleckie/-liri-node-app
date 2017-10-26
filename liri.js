// Node module imports needed to run the functions
var fs = require("fs"); //reads and writes files
var request = require("request");
var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require("spotify");
var arg = process.argv[2];

// Possible commands

case "my-tweets":
    myTweets();
    break;
case "spotify-this-song":
    spotifyThisSong();
    break;
case "movie-this":
    movieThis();
    break;
case "do-what-it-says":
    doWhatItSays();
    break;
