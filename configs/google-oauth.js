require("dotenv").config();
const passport = require("passport")
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const { v4:  uuidv4 } = require("uuid");
let User = require("../models1/user.model")
 
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:2233/auth/google/callback",
    passReqToCallback   : true
  },
  async function (request, accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    let user = await User.findOne({email: profile?.email}).lean().exec();

    if(!user){
        user = await User.create({
            email: profile?.email,
            password:uuidv4()
        })
    }
    // });
    // console.log(accessToken, refreshToken, profile)
    console.log("email",profile?.email)
    console.log(user)
    // console.log(uuidv4())
    return done(null, user)
  }
));

module.exports = passport;