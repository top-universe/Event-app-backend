const express =  require("express")
const app = express()
const passport = require("passport")
const authRouter = require("./src/modules/auth/router")
const keys = require("./src/config/keys")
const db = require("./src/config/database")
const session = require("express-session")

//Configure Passport
app.use(passport.initialize())
app.use(passport.session());

app.use(authRouter)

app.get("/", (req, res) => {
    res.send("Welcome to Event App")
})

db.connectToDB()
const PORT = 3000
app.listen(PORT, () =>{
    console.log("Event App is up and running")
})