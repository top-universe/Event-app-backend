require("dotenv").config()
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {checkIfUserExist, createNewUser } = require("./repository")


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

    // user details from google
    let email = profile.emails[0].value
    let googleId = profile.id
    let firstname = profile.name.givenName
    let lastname = profile.name.familyName
    let picture = profile.photos[0].value
    
    let currentUser = await checkIfUserExist(email)
    if (currentUser){
      return done(null, currentUser)
    }
    
    let newUser = await createNewUser({ googleId, email, firstname, lastname, picture })
      return done(null, newUser)
    }
));


