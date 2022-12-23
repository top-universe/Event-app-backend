const express =  require("express")
const app = express()
const passport = require("passport")
const authRouter = require("./src/modules/auth/router")


//Configure Passport
app.use(passport.initialize())

app.use(authRouter)

app.get("/", (req, res) => {
    res.send("Welcome to Event App")
})

const PORT = 3000
app.listen(PORT, () =>{
    console.log("Event App is up and running")
})