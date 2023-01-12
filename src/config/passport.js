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

    // user details from google
    let email = profile.emails[0].value
    let googleId = profile.id
    let firstname = profile.name.givenName
    let lastname = profile.name.familyName
    let picture = profile.photos[0].value
    
    if (checkIfUserExist(email)){
      return done(null, currentUser)
    }
    
    let newUser = createNewUser({ googleId, email, firstname, lastname, picture })
      return done(null, newUser)
    }
));


async function checkIfUserExist(email) {
  let currentUser = await Auth.getUser(email)
  return (currentUser)? true : false
}

async function createNewUser(data) {
  return await Auth.createNewUser(...data)
}