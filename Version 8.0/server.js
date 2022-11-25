const https = require("https");
const express = require("express");

// const {descriptions} = require('./descriptions.js');



const app = express();
// app.use(express.static("/images")) //idk if tama di gumagana
app.use(express.static("/style.css")) // idk if tama di gumagana
app.use('/static', express.static(__dirname + '/images')); 

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/images"));

// EJS 
app.set('view engine', 'ejs');

// INDEX
app.get("/",function(req,res){
//    res.sendFile(__dirname +"/index.html");
    res.render("index.ejs");
    console.log("new EJS route entered");
});

// Movies Tab
app.get("/movies",function(req,res){
    //    res.sendFile(__dirname +"/index.html");
        res.render("movies.ejs");
        console.log("movies.ejs entered");
    });


// TV Series Tab
app.get("/tvseries",function(req,res){
    //    res.sendFile(__dirname +"/index.html");
        res.render("tvSeries.ejs");
        console.log("tvSeries.ejs entered");
    });
// Register Tab
app.get("/register",function(req,res){
    //    res.sendFile(__dirname +"/index.html");
        res.render("register.ejs");
        console.log("register.ejs entered");
    });

// Login Tab
app.get("/login",function(req,res){
    res.render("login.ejs");
    console.log("ENTERED RES REnder");
 });
 // UserIn Page
 app.get("/userin",function(req,res){
    res.render("userin.ejs");
    console.log("ENTERED RES REnder");
 });
  // Profile Page
  app.get("/profile",function(req,res){
    res.render("profile.ejs");
    console.log("ENTERED RES REnder");
 });
    
    
    


// Descriptions
var interstellarDesc = "Interstellar is a 2014 science fiction film co-written, directed and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, Matt Damon, and Michael Caine.Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for mankind.";
var days500Desc = "Tom (Joseph Gordon-Levitt), greeting-card writer and hopeless romantic, is caught completely off-guard when his girlfriend, Summer (Zooey Deschanel), suddenly dumps him. He reflects on their 500 days together to try to figure out where their love affair went sour, and in doing so, Tom rediscovers his true passions in life.";
var opDesc = "Uta is a beloved singer, renowned for concealing her own identity when performing. Her voice is described as  otherworldy Now, for the first time ever, Uta will reveal herself to the world at a live concert.";
var pulpDesc = "Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace (Ving Rhames) ; his actress wife, Mia (Uma Thurman) ; struggling boxer Butch Coolidge (Bruce Willis) ; master fixer Winston Wolfe (Harvey Keitel) and a nervous pair of armed robbers, Pumpkin (Tim Roth) and Honey Bunny (Amanda Plummer).";
var rubenDesc = "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.";
var parasiteDesc = "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.";
var shiningDesc = "Jack Torrance (Jack Nicholson) becomes winter caretaker at the isolated Overlook Hotel in Colorado, hoping to cure his writer's block. He settles in along with his wife, Wendy (Shelley Duvall), and his son, Danny (Danny Lloyd), who is plagued by psychic premonitions. As Jack's writing goes nowhere and Danny's visions become more disturbing, Jack discovers the hotel's dark secrets and begins to unravel into a homicidal maniac hell-bent on terrorizing his family.";
var dahmerDesc = "The story of one of the most notorious serial killers in the United States, largely told from the points of view of his victims.";
 // MOVIE PAGES 
    // Interstellar
app.get("/interstellar",function(req,res){
    var data = { 
    movieTitle: "Interstellar",
     movieDesc: interstellarDesc,
     moviePoster: "interstellar.jpg" }
    res.render("moviePage.ejs", data );
    console.log("ENTERED RES REnder");
});
    // 500 days
    app.get("/500Days",function(req,res){
        var data = { 
            movieTitle: "500 Days of Summer",
             movieDesc: days500Desc,
             moviePoster: "500daysposter.jpg" }
        res.render("moviePage.ejs", data );
        console.log("ENTERED RES REnder");
    });
     // One Piece
    app.get("/OnePiece",function(req,res){
        var data = { 
            movieTitle: "One Piece: Film Red",
             movieDesc: opDesc,
             moviePoster: "OPposter.jpg" }
        res.render("moviePage.ejs", data );
        console.log("ENTERED RES REnder");
    });
    // Pulp Fiction
    app.get("/pulpfiction",function(req,res){
        var data = { 
        movieTitle: "Pulp Fiction",
         movieDesc: pulpDesc,
         moviePoster: "pulp-fiction.jpg" }
        res.render("moviePage.ejs", data );
        console.log("ENTERED RES REnder");
    });
    // your name
    app.get("/yourname",function(req,res){
        var data = { 
        movieTitle: "Your Name",
         movieDesc: rubenDesc,
         moviePoster: "ruben.jpg" }
        res.render("moviePage.ejs", data );
        console.log("ENTERED RES REnder");
    });
    // Parasite
    app.get("/parasite",function(req,res){
        var data = { 
        movieTitle: "Parasite",
         movieDesc: parasiteDesc,
         moviePoster: "parasite.jpg" }
        res.render("moviePage.ejs", data );
        console.log("ENTERED RES REnder");
    });
    // The Shining
    app.get("/shining",function(req,res){
        var data = { 
        movieTitle: "The Shining",
        movieDesc: shiningDesc,
        moviePoster: "shining.jpg" }
        res.render("moviePage.ejs", data );
        console.log("ENTERED RES REnder");
    });
    // The Shining
    app.get("/dahmer",function(req,res){
         var data = { 
        movieTitle: "Dahmer – Monster: The Jeffrey Dahmer Story",
        movieDesc: dahmerDesc,
        moviePoster: "dahmer.jpg" }
        res.render("moviePage.ejs", data );
        console.log("ENTERED RES REnder");
    });
    


app.listen(3000, function(){
    console.log("Server started on port 3000");
});