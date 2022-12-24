require("dotenv").config()
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Auth = require("../modules/auth/repository")


passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:process.env.CALLBACK_URL
  },
  async (accessToken, refreshToken, profile, done) => {

    //user details from google
    let email = profile.emails[0].value
    let googleId = profile.id
    let username = profile.displayName

    const currentUser = Auth.findOne(email)
    if (currentUser){
      //user already exists
      return done(null, currentUser)
    }else {
      //user is new
      Auth.createNewUser(googleId, email, username)
      return done(null, currentUser)
    }

   }
));