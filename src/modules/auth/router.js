const authRouter  = require("express").Router()
const passport = require("passport")
require("../../config/passport")
const {
    login,
    logout,
    google, 
    googleRedirect,
    checkUserIsLoggedIn} = require("./handler")

authRouter.get(
    '/auth/google', 
    passport.authenticate('google', { scope: ['profile'] }),
    google
)

authRouter.get('/auth/google/callback', 
    passport.authenticate('google'),
    googleRedirect
)
  
//Logout
// authRouter.get("/logout", logout)
// authRouter.get("/login", checkUserIsLoggedIn, login)

module.exports = authRouter