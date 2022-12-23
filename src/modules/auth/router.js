const authRouter  = require("express").Router()
const passport = require("passport")
require("./model")

 
authRouter.get('/failed', (req, res) => {
    res.json({
        "Error": "Login Failed"
    })
  });
  
// Middleware - Check user is Logged in
const checkUserLoggedIn = (req, res, next) => {
    if (!req.user){
        next()
    }
    res.json({
        "Error": "Unauthorized! Access Denied"
    })
}
  
//Protected Route.
 authRouter.get('/profile', checkUserLoggedIn, (req, res) => {
    res.json(req.user)
});
  
//Login
authRouter.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

authRouter.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  (req, res) => {
    res.redirect('/profile')
  }
)
  
//Logout
authRouter.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

module.exports = authRouter