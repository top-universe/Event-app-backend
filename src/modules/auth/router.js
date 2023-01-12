const jwt = require('jsonwebtoken')
const secret = AppConfig.SESSION_SECRET

const authRouter  = require("express").Router()
const passport = require("passport")
require("../../config/passport")

// authenticate user [login/signup]
authRouter.post('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

// get google profile detail handler
authRouter.get('/google/callback', 
    passport.authenticate('google', {
        failureRedirect: "/auth/google",
        successRedirect: "/auth/user"
    })
)


// logout handler
authRouter.get("/logout", (req, res) => {
    req.session.destroy()
    req.redirect("/")
})


authRouter.get('/user', (req, res) => {
    // collect user details
    let user  = req.session.id
    let {v4} = require('uuid')
    let token = jwt.sign({
        user
      }, secret, { expiresIn: '1h' });
      console.log(token)
    res.send(token)
})


authRouter.post('/verifyToken', (req,res) => {
    const token = req.headers.authorization
    try {
        const decoded = jwt.verify(token, secret);
        res.send(decoded.user.id)  
    }catch(err) {
        console.log(err)
        res.send(err)
    }
})

module.exports = authRouter