var twitter = require('twitter');
// var spotify = require('node-spotify-api');
// var request = require("request");
// var fs = require("fs");

//Twitter Credentials
var creds = require("./keys.js");
var client = new twitter(creds);

// var nodeArray = process.argv;
// var pullRequest = process.argv[2];
// var movie = "";
// var movieArray = [];

// 	switch (pullRequest) {
// 		case "movie-this": 
			
// 			getMovie();
// 			break;

// 		case "my-tweets":
			
// 			getTweet();
// 			break;
// // 		}
// // 		case spotify-this-song: {

// // 			getSpotify();
// // 			break;
// // 		}
// 	}
	
// function getMovie() {	
//         if (nodeArray.length === 3) {
//         	var movie = "Mr. Nobody";
//         }
//         else {

//         	for (var i = 3; i < nodeArray.length; i++) {

// 				var movieSelection = nodeArray[i];
// 				movieArray.push(movieSelection);
// 				var movie = movieArray.toString();
// 			}

// 		}	
//         	// Then run a request to the OMDB API with the movie specified
// 			request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {

// 			    // If the request is successful (i.e. if the response status code is 200)
// 			    if (!error && response.statusCode === 200) {
// 		        // console.log(JSON.parse(body));
// 		        console.log("Movie title: " + JSON.parse(body).Title);
// 		        console.log("Year of release: " + JSON.parse(body).Year);
// 		        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
// 		        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
// 		        console.log("Produced in: " + JSON.parse(body).Country);
// 		        console.log("Language: " + JSON.parse(body).Language);
// 		        console.log("Plot: " + JSON.parse(body).Plot);
// 		        console.log("Actors: " + JSON.parse(body).Actors);
//         		}//if statement closing brace

// 			});//request closing bracket
// }

// function getTweet() {
	// twitterKeys.post('statuses/update', {status: 'Tweeting from bash'}, function(error, tweet, response) {
	//   if (!error) {
	//     console.log(tweet);
	//   }
	// });
// if (process.argv[2] = "my-tweets") {	
	// client.get('statuses/update', {status: 'Tweeting from bash'},  function(error, tweet, response) {
	//   // if(error) throw error;
	  
	//   console.log(tweet);  // Tweet body. 
	//   // console.log(response);  // Raw response object. 
	 
	// });


client.get('statuses/user_timeline', function(error, tweets, response) {
  // if(!error) {
  console.log(tweets);  // The favorites. 
  // console.log(response);  // Raw response object. 
  // }
});




// }

// }

// function getSpotify() {

// }



