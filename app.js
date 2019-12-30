// var express = require("express");
// var app = express();

var app = require("express")();

app.get("/", function (req, res) {
    // res.send("<h1>Welcome to the home Page<h1>");
    res.render("home.ejs");
});

app.get("/filw/:thing", function (req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", { thingVar: thing });
});

app.listen(3000, function (req, res) {
    console.log("Server was started !!!!")
});