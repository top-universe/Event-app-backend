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
        failureRedirect: "/auth/google",
        successRedirect: "/auth/user"
    })
)

authRouter.get("/user", (req, res) => {
    let user = req.user
    res.json({
        "message": "user logged in",
        user
    })
})

//logouts
authRouter.get("/logout", (req, res) => {
    req.session.destroy()
    req.redirect("/")
})

module.exports = authRouter