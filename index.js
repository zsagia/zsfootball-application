var cors = require('cors');
var express = require('express');
var app = express();
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/swc-table');
var matches = db.get('match');
var rounds = db.get('round');

var summarized = {
	season: '2015/2016',
	type: 'Premiere League',
	round: 8,
	team_results: [
		{
			position: 1,
			last_position: 1,
			team_name: 'Manchester City',
			won: 6,
			drawn: 0,
			lost: 2,
			goal_for: 19,
			goal_against: 7,
			points: 18,
			comment: ''
		},
		{
			position: 2,
			last_position: 6,
			team_name: 'Arsenal',
			won: 5,
			drawn: 1,
			lost: 2,
			goal_for: 13,
			goal_against: 7,
			points: 16,
			comment: ''
		},
		{
			position: 3,
			last_position: 2,
			team_name: 'Manchester United',
			won: 5,
			drawn: 1,
			lost: 2,
			goal_for: 12,
			goal_against: 8,
			points: 16,
			comment: ''
		},
		{
			position: 4,
			last_position: 3,
			team_name: 'Crystal Palace',
			won: 5,
			drawn: 0,
			lost: 3,
			goal_for: 11,
			goal_against: 7,
			points: 15,
			comment: ''
		},
		{
			position: 5,
			last_position: 4,
			team_name: 'Leicester City',
			won: 4,
			drawn: 3,
			lost: 1,
			goal_for: 17,
			goal_against: 15,
			points: 15,
			comment: ''
		},
		{
			position: 6,
			last_position: 5,
			team_name: 'West Ham United',
			won: 4,
			drawn: 2,
			lost: 2,
			goal_for: 17,
			goal_against: 11,
			points: 14,
			comment: ''
		},
		{
			position: 7,
			last_position: 7,
			team_name: 'Everton',
			won: 3,
			drawn: 4,
			lost: 1,
			goal_for: 12,
			goal_against: 8,
			points: 13,
			comment: ''
		},
		{
			position: 8,
			last_position: 8,
			team_name: 'Tottanham Hotspurs',
			won: 3,
			drawn: 4,
			lost: 1,
			goal_for: 11,
			goal_against: 7,
			points: 13,
			comment: '' 
		},{
			position: 9,
			last_position: 9,
			team_name: 'Southampton',
			won: 3,
			drawn: 3,
			lost: 2,
			goal_for: 13,
			goal_against: 10,
			points: 12,
			comment: ''
		},
		{
			position: 10,
			last_position: 10,
			team_name: 'Liverpool',
			won: 3,
			drawn: 3,
			lost: 2,
			goal_for: 8,
			goal_against: 10,
			points: 12,
			comment: ''
		},
		{
			position: 11,
			last_position: 12,
			team_name: 'Swansea City',
			won: 2,
			drawn: 4,
			lost: 2,
			goal_for: 10,
			goal_against: 10,
			points: 10,
			comment: ''
		},
		{
			position: 12,
			last_position: 11,
			team_name: 'Watford',
			won: 2,
			drawn: 4,
			lost: 2,
			goal_for: 6,
			goal_against: 7,
			points: 10,
			comment: ''
		},
		{
			position: 13,
			last_position: 13,
			team_name: 'Norwich City',
			won: 2,
			drawn: 3,
			lost: 3,
			goal_for: 12,
			goal_against: 14,
			points: 9,
			comment: ''
		},
		{
			position: 14,
			last_position: 14,
			team_name: 'Stoke City',
			won: 2,
			drawn: 3,
			lost: 3,
			goal_for: 8,
			goal_against: 10,
			points: 9,
			comment: ''
		},
		{
			position: 15,
			last_position: 15,
			team_name: 'Bournemouth',
			won: 2,
			drawn: 2,
			lost: 4,
			goal_for: 10,
			goal_against: 12,
			points: 8,
			comment: ''
		},
		{
			position: 16,
			last_position: 16,
			team_name: 'Chelsea',
			won: 2,
			drawn: 2,
			lost: 4,
			goal_for: 12,
			goal_against: 17,
			points: 8,
			comment: ''
		},
		{
			position: 17,
			last_position: 17,
			team_name: 'West Bromwich Albion',
			won: 2,
			drawn: 2,
			lost: 4,
			goal_for: 6,
			goal_against: 11,
			points: 8,
			comment: ''
		},
		{
			position: 18,
			last_position: 18,
			team_name: 'Aston Villa',
			won: 1,
			drawn: 1,
			lost: 6,
			goal_for: 8,
			goal_against: 13,
			points: 4,
			comment: ''
		},
		{
			position: 19,
			last_position: 19,
			team_name: 'Sunderland',
			won: 0,
			drawn: 3,
			lost: 5,
			goal_for: 8,
			goal_against: 18,
			points: 3,
			comment: ''
		},{
			position: 20,
			last_position: 20,
			team_name: 'Newcastle United',
			won: 0,
			drawn: 3,
			lost: 5,
			goal_for: 6,
			goal_against: 17,
			points: 3,
			comment: ''
		}
	]
};

var roundMatches = [
	{
		id: 7101,
		attendance: 75261,
		awayClub: 'Tottenham Hotspurs',
		awayGoals: 0,
		homeClub: 'Manchester United',
		homeGoals: 1,
		matchDate: 1439041500000,
		round: 1,
		season: {id: 2001, title: '2015/2016'},
		venue: 6001,
		type: {id: 1001, name: 'Premiere League'}
	},	
	{
		id: 7102,
		attendance:  11155,
		awayClub: 'Aston Villa',
		awayGoals: 1,
		homeClub: 'AFC Bournemouth',
		homeGoals: 0,
		matchDate: 1439046000000,
		round: 1,
		season: {id: 2001, title: '2015/2016'},
		venue: 6004,
		type: {id: 1001, name: 'Premiere League'}
	},
	{
		id: 7103,
		attendance: 27036,
		awayClub: 'Crystal Palace',
		awayGoals: 3,
		homeClub: 'Norwich City',
		homeGoals: 1,
		matchDate: 1439046000000,
		round: 1,
		referee: 'Simon Hooper',
		season: {id: 2001, title: '2015/2016'},
		venue: 6012,
		type: {id: 1001, name: 'Premiere League'}
	},
	{
		id: 7104,
		attendance: 39063,
		awayClub: 'Watford FC',
		awayGoals: 2,
		homeClub: 'Everton',
		homeGoals: 2,
		matchDate: 1439046000000,
		round: 1,
		referee: 'Mike Jones',
		season: {id: 2001, title: '2015/2016'},
		venue: 6007,
		type: {id: 1001, name: 'Premiere League'}
	},
	{
		id: 7105,
		attendance: 32242,
		awayClub: 'Sunderland AFC',
		awayGoals: 2,
		homeClub: 'Leicester City',
		homeGoals: 4,
		matchDate: 1439046000000,
		round: 1,
		referee: 'Lee Mason',
		season: {id: 2001, title: '2015/2016'},
		venue: 6008,
		type: {id: 1001, name: 'Premiere League'}
	},
	{
		id: 7106,
		attendance: 41232,
		awayClub: 'Swansea City',
		awayGoals: 2,
		homeClub: 'Chelsea FC',
		homeGoals: 2,
		matchDate: 1439055000000,
		round: 1,
		referee: 'Michael Oliver',
		season: {id: 2001, title: '2015/2016'},
		venue: 6005,
		type: {id: 1001, name: 'Premiere League'}
	},
	{
		id: 7107,
		attendance: 59996,
		awayClub: 'West Ham',
		awayGoals: 2,
		homeClub: 'Arsenal',
		homeGoals: 0,
		matchDate: 1439127000000,
		round: 1,
		referee: 'Martin Atkinson',
		season: {id: 2001, title: '2015/2016'},
		venue: 6002,
		type: {id: 1001, name: 'Premiere League'}
	},
	{
		id: 7108,
		attendance: 59996,
		awayClub: 'Southampton',
		awayGoals: 2,
		homeClub: 'Newcastle United',
		homeGoals: 2,
		matchDate: 1439127000000,
		round: 1,
		referee: 'Craig Pawson',
		season: {id: 2001, title: '2015/2016'},
		venue: 6011,
		type: {id: 1001, name: 'Premiere League'}
	},
	{
		id: 7109,
		attendance: 27654,
		awayClub: 'Liverpool FC',
		awayGoals: 1,
		homeClub: 'Stoke City',
		homeGoals: 0,
		matchDate: 1439136000000,
		round: 1,
		referee: 'Anthony Taylor',
		season: {id: 2001, title: '2015/2016'},
		venue: 6014,
		type: {id: 1001, name: 'Premiere League'}
	},
	{
		id: 7110,
		attendance: 24564,
		awayClub: 'Manchester City',
		awayGoals: 3,
		homeClub: 'West Brom',
		homeGoals: 0,
		matchDate: 1439236800000,
		round: 1,
		referee: 'Mike Dean',
		season: {id: 2001, title: '2015/2016'},
		venue: 6019,
		type: {id: 1001, name: 'Premiere League'}
	}
];

var makeMatches = function(roundId, response) {
	matches.find(
		{"roundId":roundId},
		function(error, results){
			// json.matches = results;

			response.json(roundMatches);
	});
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

	makeMatches(parseInt(request.query.roundId), response);
});

app.get('/rounds', function (request, response) {
	console.log('Rounds started');

	makeRounds(parseInt(request.query.roundId), response);
});

app.get('/summarized', function (request, response) {
	var data = {
		summarized: summarized
	}

	response.json(data);
	
  	console.log('Summarized started');
  	console.log(json);
});;

app.listen(8888);
