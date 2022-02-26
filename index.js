const express = require('express');
const app = express();

const connect = require('./configs/db');
const userController = require("./controller1/user.controller")
const passport = require("./configs/google-oauth")

const {register,login,newToken} = require("./controller1/auth.controller")

app.use(express.json())
app.use("/users", userController)

app.post("/register",register)
app.post("/login",login)



app.get('/auth/google',
  passport.authenticate('google', { scope:
  	[ 'email', 'profile' ] }
));
 
app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
      //  successRedirect: '/homepage.html',
        failureRedirect: '/auth/google/failure'
}),(req, res) => {
    const token = newToken(req.user)


        res.send({user:req.user, token})
    return res.send(req.user)
});

passport.serializeUser(function(user, done) {
    //console.log("5",user)
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    //console.log("25",user)

    done(null, user);
  });


app.listen(2233,async()=>{
    await connect();
    console.log("listening on port 2233")
})






