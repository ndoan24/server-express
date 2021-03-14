// Dependencies
// =============================================================
var express = require("express");
var app = express();
var path = require("path");

// Sets up the Express App
// =============================================================
var PORT = 3000;

// Sets up the Express app to handle data parsing
// for sending POST requests

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Movie  Characters (DATA)
// =============================================================
var characters = [
    { 
        routeName: "harrypotter",
        name: "HarryPotter",
        role: "wizard",
        age: 17,
        superPower: "magic"
    },
    { 
        routeName: "spiderman",
        name: "SpiderMan",
        role: "superhero",
        age: 100,
        superPower: "superpowers"
    },

    { 
        routeName: "kirby",
        name: "kirby",
        role: "pacman",
        age: 40,
        superPower: "adventure"

    },
    { 
        routeName: "pacman",
        name: "PacMan",
        role: "eat",
        age: 70,
        superPower: "eating"

    },
    { 
        routeName: "meangirls",
        name: "catie",
        role: "plastic",
        age: 18,
        superPower: "newgirl"

    }
];

// Routes
// =============================================================
// Basic route that sends the user first to the Pages
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "view.html"))
});

app.get("/add", function(req, res){
    res.sendFile(path.join(__dirname, "add.html"))
});

// Displays all characters
app.get("/api/characters", function(req, res){
    res.json(characters);
});



// Displays a single character, or returns false
// Returns the parameter of a specified name
// Grab the selected parameter
// Goes through the array for the Characters
// : before our route to target an array
app.get('/api/:characters', function(req, res){

	var chosen = req.params.characters;

	if(chosen){
		console.log(chosen);

		for (var i=0; i <characters.length; i++){

			if (chosen == characters[i].routeName){
				res.json(characters[i]);
				return;
			}
		}

		res.json(false);
	}

	else{
		res.json(characters);
	}
})
// Create New Characters - takes in JSON input
// req.body hosts is equal to the JSON post sent from the user
// This works because of our body parsing middleware
app.post("/api/characters", function(req, res) {
    var newCharacter = req.body;

    console.log(newCharacter)

    characters.push(newCharacter);

    res.json(newCharacter);
});

// Using a RegEx Pattern to remove spaces from newCharacter
// You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App is listening on port: " + PORT);
})