// Dependencies
// =============================================================

var express= require("express");
var path= require=("path");


// Sets up the Express App
// =============================================================

var app= express();
var PORT= 8080;

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Movie  Characters (DATA) in an array as data
// =============================================================
var characters = [
{

routeName: "harrypotter",
name: "harrypotter",
role: "wizard",
age: 16,
superPower: "magic"

},

{

    routeName: "spiderman",
    name: "spiderman",
    role: "superhero",
    age: 17,
    superPower: "speed"
    
    },

    {

        routeName: "elliot",
        name: "elliot",
        role: "hot guy",
        age: 17,
        superPower: "big man on campus"
        
        }, 

]


// Routes
// =============================================================
// Basic route that sends the user first to the Pages

app.get("/", function(req,res) {

    res.sendFile(Path.join(_dirname, "add,html"));
});


app.get("/add", function(req,res) {

    res.sendFile(Path.join(_dirname, "add,html"));
});


// Displays all characters

app.get("/api/characters", function(req, res) {
    return res.json(characters);
});

// Displays a single character, or returns false


app.get("/api/characters/:character", function(req,res) {
    var chosen = req.param.character;
    console.log(chosen);
})



// Create New Characters - takes in JSON input

app.post


df



// req.body hosts is equal to the JSON post sent from the user
// This works because of our body parsing middleware
  



// Using a RegEx Pattern to remove spaces from newCharacter
// You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  





// Starts the server to begin listening
// =============================================================


app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT)
});