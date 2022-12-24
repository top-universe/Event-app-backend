

exports.login = async (req, res) => {
    res.send("User Authenticated")
}

exports.logout = async (req, res) => {
    res.logout()
    res.redirect("/")
}

exports.googleRedirect = async (req, res) => {
    req.send(req.user)
}
exports.google = async (req, res) => {
    res.send(req.user)
}

// Middleware - Check user is Logged in
exports.checkUserLoggedIn = (req, res, next) => {
    if (!req.user){
        next()
    }else(
    res.json({
        "Error": "Unauthorized! Access Denied"
    })
    )
}