const authRouter  = require("express").Router()
const passport = require("passport")
const { generateToken } = require('./middleware')
const {authController} = require('./controller')

require("./passport")

// [google login/signup]
authRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

// get google profile detail handler
authRouter.get('/google/callback', 
    passport.authenticate('google', {
        failureRedirect: "/auth/google",
        successRedirect: "/auth/home"
    })
)

authRouter.get("/logout", authController.logout) // logout route

authRouter.get('/home', generateToken, authController.getAuthenticatedUser) // get authenticated user

module.exports = authRouter