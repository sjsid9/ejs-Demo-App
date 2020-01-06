var express = require("express");
var app = express();

// var app = require("express")();

// look for public named folder and serve it online, so that it's contents can be used
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    // res.send("<h1>Welcome to the home Page<h1>");
    res.render("home");
});

app.get("/posts", function (req, res) {
    var posts = [
        { title: "hello", author: "world" },
        { title: "Ironman", author: "Tony Stark" },
        { title: "Captain America", author: "Steve Rogers" }
    ]
    res.render("posts", { posts: posts });
});

app.get("/filw/:thing", function (req, res) {
    var thing = req.params.thing;
    res.render("love", { thingVar: thing });
});

app.listen(3000, function (req, res) {
    console.log("Server was started !!!!")
});