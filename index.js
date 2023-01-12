const express =  require("express")
const app = express()
require("./src/config/keys")
const passport = require("passport")
const authRouter = require("./src/modules/auth/router")
const eventRouter = require("./src/modules/event/router")
const { connectToDB } = require("./src/config/database")
const session = require("express-session")


app.use(session({
    secret: AppConfig.SESSION_SECRET,
    saveUninitialized: true,
    cookie: { maxAge : 1000 * 60 * 60 * 24 },
    resave: false
}))

app.use(express.json())

//Configure Passport
app.use(passport.initialize())
app.use(passport.session())


app.use("/auth",authRouter)
app.use(eventRouter)

app.get("/", (req, res) => {
    res.send("Welcome to event app")
})

connectToDB()
const PORT = AppConfig.PORT
app.listen(PORT, () =>{
    console.log("Event App is up and running")
})