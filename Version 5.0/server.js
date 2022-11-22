const https = require("https");
const express = require("express");


const app = express();
// app.use(express.static("/images")) //idk if tama di gumagana
app.use(express.static("/style.css")) // idk if tama di gumagana
app.use('/static', express.static(__dirname + '/images')); 

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/images"));


app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
});
 // PAGES 
app.get("/interstellar.html",function(req,res){
    res.sendFile(__dirname +"/interstellar.html");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});