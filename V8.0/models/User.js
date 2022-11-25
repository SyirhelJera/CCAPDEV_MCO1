import mongoose from "mongoose";
const {Schema, model} = mongoose;

// Schema Setup for Movies
// Define the Variables of Database
const userSchema = new Schema({
    username: String,
    email: String,
    password: String,

}, {timestamps: true});


// Model Setup
const User = model("User", userSchema);
module.exports = User;
export default MoviePage;
