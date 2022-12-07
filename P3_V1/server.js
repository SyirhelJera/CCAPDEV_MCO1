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
    Movie.find()
    .then((result) => {
        testmovie = result;
        res.render("index.ejs",testmovie);
        })
    .catch((err) => {
        console.log(err);
    })
   
    console.log("ENTERED userin res REnder");
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
    
    

// MOVIE PAGES 
    // Interstellar
app.get("/interstellar",function(req,res){

    Movie.find({ title: 'Interstellar'}, function (err, data) {
        if (err){
            console.log(err);
        }
        else{
            testmovie = data;
         //   console.log("First function call : ", data);
            res.render("moviePage.ejs",testmovie);
        }
    });

});

    // 500 days
app.get("/500Days",function(req,res){

    Movie.find({ title: '500 Days of Summer'}, function (err, data) {
        if (err){
            console.log(err);
        }
        else{
            testmovie = data;
         //   console.log("First function call : ", data);
            res.render("moviePage.ejs",testmovie);
        }
    });

});
     // One Piece
    app.get("/OnePiece",function(req,res){

        Movie.find({ title: 'One Piece Film: Red'}, function (err, data) {
            if (err){
                console.log(err);
            }
            else{
                testmovie = data;
             //   console.log("First function call : ", data);
                res.render("moviePage.ejs",testmovie);
            }
        });

    });
    // Pulp Fiction
    app.get("/pulpfiction",function(req,res){

        Movie.find({ title: 'Pulp Fiction'}, function (err, data) {
            if (err){
                console.log(err);
            }
            else{
                testmovie = data;
             //   console.log("First function call : ", data);
                res.render("moviePage.ejs",testmovie);
            }
        });
    });
    // your name
    app.get("/yourname",function(req,res){

        Movie.find({ title: 'Your Name.'}, function (err, data) {
            if (err){
                console.log(err);
            }
            else{
                testmovie = data;
             //   console.log("First function call : ", data);
                res.render("moviePage.ejs",testmovie);
            }
        });

    });
    // Parasite
    app.get("/parasite",function(req,res){

        Movie.find({ title: 'Parasite'}, function (err, data) {
            if (err){
                console.log(err);
            }
            else{
                testmovie = data;
             //   console.log("First function call : ", data);
                res.render("moviePage.ejs",testmovie);
            }
        });

    });
    // The Shining
    app.get("/shining",function(req,res){

        Movie.find({ title: 'The Shining'}, function (err, data) {
            if (err){
                console.log(err);
            }
            else{
                testmovie = data;
             //   console.log("First function call : ", data);
                res.render("moviePage.ejs",testmovie);
            }
        });

    });
    // The Shining
    app.get("/dahmer",function(req,res){

        Movie.find({ title: 'Dahmer'}, function (err, data) {
            if (err){
                console.log(err);
            }
            else{
                testmovie = data;
             //   console.log("First function call : ", data);
                res.render("moviePage.ejs",testmovie);
            }
        });

    });
    
