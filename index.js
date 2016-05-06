var cors = require('cors');
var express = require('express');
var app = express();
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/swc-table');
var matches = db.get('match');
var rounds = db.get('round');

var makeMatches = function(seasonId, response) {
	matches.find(
		{"seasonId":seasonId},
		function(error, results){
			json.matches = results;

			response.json(json);
	});

	console.log(json.matches);
};

var makeRounds = function(roundId, response) {
	rounds.find(
		{"roundId":roundId},
		function(error, results) {
			json.rounds = results;

			response.json(json);
		}
	);
};

app.use(cors());

app.get('/matches', function (request, response) {
	console.log('Matches started');

	makeMatches(parseInt(request.query.seasonId), response);
});

app.get('/rounds', function (request, response) {
	console.log('Rounds started');

	makeRounds(parseInt(request.query.roundId), response);
});

app.get('/summarized', function (request, response) {
	var data = {
		summarized: json.summarized
	}

	response.json(data);
	
  	console.log('Summarized started');
  	console.log(json);
});;

app.listen(8888);