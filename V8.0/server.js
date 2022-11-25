const https = require('https');
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const { connect } = require('http2');
const Movie = require('./models/Movies');
const Movies = require('./models/Movies');


const app = express();

// CONNECT TO MONGODB
const uri = "mongodb+srv://admin:adminpassword@CCAPDEV.4i3mcim.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => app.listen(3000, function(){
            console.log("Server started on port 3000");
        }))
        .catch((err) => console.log(err));



// Testing Routes

// TEST ADDING TO DATABASE
app.get('/add-movie', (req,res) => {
    const movie = new Movie({
        title: 'test3',
        genre: 'test',
        runTime: 'test',
        year: 'test',
        director: 'test',
        cast: ['test'],
        type: 'test',
        lastUpdated: 'test',
        plot: 'test',
        
        // Reviews of the Posts
        comments: [{
            user: 'test',
            content: 'test',
            likes: 'test',
        }]
    })

    movie.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) =>{
        console.log(err);
    })
   
})

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

