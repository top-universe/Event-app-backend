const authRouter  = require("express").Router()
const passport = require("passport")
require("../../config/passport")

//authenticate user [login/signup]
authRouter.get(
    '/google', 
    passport.authenticate('google', { scope: ['profile', 'email'] })
)

authRouter.get('/google/callback', 
    passport.authenticate('google', {
        failureRedirect: "/auth/failed",
        successRedirect: "/auth/user"
    })
)

//logouts
authRouter.get("/logout", (req, res) => {
    req.session.destroy()
    req.redirect("/")
})

module.exports = authRouter