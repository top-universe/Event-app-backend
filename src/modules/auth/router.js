const authRouter  = require("express").Router()
const passport = require("passport")
const { generateToken } = require('./middleware')
require("./passport")

// authenticate user [login/signup]
authRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

// get google profile detail handler
authRouter.get('/google/callback', 
    passport.authenticate('google', {
        failureRedirect: "/auth/google",
        successRedirect: "/auth/home"
    })
)


// logout handler
authRouter.get("/logout", (req, res) => {
    req.session.destroy()
    req.redirect("/")
})

// get authenticated user
authRouter.get('/home', generateToken, (req, res) => {
    token = req.token
    res.send(token)
})


module.exports = authRouter