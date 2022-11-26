const https = require('https');
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const { connect } = require('http2');
const Movie = require('./models/Movies');
const User = require('./models/User');
const Post = require('./models/Post');
const bodyparser = require('body-parser');
const { title } = require('process');


const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// CONNECT TO MONGODB
const uri = "mongodb+srv://admin:adminpassword@CCAPDEV.4i3mcim.mongodb.net/phase2?retryWrites=true&w=majority"
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => app.listen(3000, function(){
            console.log("Server started on port 3000");
        }))
        .catch((err) => console.log(err));



// Testing Routes DB INTERACTION
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
                                img: 'https://hmhub.in/wp-content/uploads/2018/08/02775157-3c14-4f31-8337-3b63c1b01d25_2-Keys-for-a-Proactive-Maintenance-Approach_extra_large.jpeg',
                                
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
    // USER DB
    app.get('/add-user', (req,res) => {
                            const user1 = new User({
                                username: 'UserTest1',
                                email: 'HAHA@gmail.com',
                                password: 'String',
                            
                            })

                            user1.save()
                            .then((result) => {
                                res.send(result)
                            })
                            .catch((err) =>{
                                console.log(err);
                            })
                        
    })
    // POST DB
    app.get('/add-post', (req,res) => {
                            const post = new Post({
                                id: 'String',
                                content: 'String',
                                votes: 'String',
                                likes: 'String',
                                shares: 'String',
                                date: 'String',
                                time: 'String',
                            
                            })

                            post.save()
                            .then((result) => {
                                res.send(result)
                            })
                            .catch((err) =>{
                                console.log(err);
                            })
                        
     })


app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/images"));

// EJS 
app.set('view engine', 'ejs');

// INDEX
app.get("/",function(req,res){

    res.render("index.ejs");
    console.log("Index route entered");
});

// Movies Tab
app.get("/movies",function(req,res){
    Movie.find()
    .then((result) => {
        testmovie = result;
        res.render("movies.ejs",testmovie);
        })
    .catch((err) => {
        console.log(err);
    })
   
    console.log("ENTERED userin res REnder");
 });


// TV Series Tab
app.get("/tvseries",function(req,res){
    
        res.render("tvSeries.ejs");
        console.log("tvSeries.ejs entered");
    });
// Register Tab
app.get("/register",function(req,res){

        res.render("register.ejs");
        console.log("register.ejs entered");
    });

    // REGISTER POST
app.post("/register",function(req,res){
    console.log(req.body)
    const {username, email, password } = req.body;

    const user1 = new User({
        username: username,
        email: email,
        password: password,

    })

    user1.save()
    .then((result) => {
  //      res.send(result)
        res.render("login.ejs");
    })
    .catch((err) =>{
        console.log(err);
    })

        console.log("register.ejs entered");
    });

// Login Tab
app.get("/login",function(req,res){
    res.render("login.ejs");
    console.log("ENTERED login res REnder");
 });
 
 // UserIn Page
 app.get("/userin",function(req,res){
    Movie.find()
    .then((result) => {
        testmovie = result;
        res.render("userin.ejs",testmovie);
        })
    .catch((err) => {
        console.log(err);
    })
   
    console.log("ENTERED userin res REnder");
 });
  // Profile Page
  app.get("/profile",function(req,res){
    res.render("profile.ejs");
    console.log("ENTERED Prof REnder");
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

    Movie.find()
    .then((result) => {
        testmovie = result;
        res.render("moviePage.ejs",testmovie);
        })
    .catch((err) => {
        console.log(err);
    })


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
       Movie.find
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
    
