
// Dependencies
// =============================================================

var express = require("express");
var app = express();
var PORT = 3000;

//data

var yoda = {
    name: "yoda",
    role: "jedi Mater",
    age: 900,
    forcePoints: 2000

};

var darthmaul = {
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcepoints: 1200

};

//Routes
//EXPRESS when someone does a GET request, trigger this behavior//
//Sends a json as an object

app.get("/", function (req, res) {
    res.send("Welcome to my Start Wars Page");

    app.get("/yoda", function(req, res) {
        res.json(yoda);

    });

        app.get("/darthmaul", function (req, res) {
            res.json(darthmaul);
        });


    app.get("darthmaul", function (req, res) {
        res.json(darthvador)
    });
}

);


//Listener

app.listen(PORT, function() {
    console.log("App is listening on PORT" + PORT);
})