import mongoose from "mongoose";
const {Schema, model} = mongoose;

// Schema Setup for Movies
// Define the Variables of Database
const postSchema = new Schema({
    username: String,

    // Reviews of the Posts
    postcontent: [{
        id: String,
        content: String,
        votes: Number,
        likes: Number,
        shares: Number,
        date: date,
        time: time,
    }]
});


// Model Setup
const Post = model("Post", postSchema);
export default MoviePage;
