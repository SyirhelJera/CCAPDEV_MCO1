const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")

function initialize(passport, getUserbyUsername, getUserbyId){
    // Authenticates Users
    const authenticateUsers = async (username, password, done) => {
        //get users by email
        const user = getUserbyUsername(username)
        if(user == null){
            return done(null, false,{message: "no user in the database"})
        }
        try{
            if(await bcrypt.compare(password, user.password)){
                return done(null, user)
            } else {
                return done (null, false, {message: "password incorrect."})
            }
        } catch (e){
            console.log(e);
            return done(e)
        }
    }

    passport.use(new LocalStrategy({usernameField: 'username'}, authenticateUsers))
    passport.serializeUser((user,done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
        return done(null, getUserbyId(id))
    })
}

module.exports = initialize