require("dotenv").config()

global.AppConfig = {
    PORT: process.env.PORT,
    DATABASE: process.env.DATABASE,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    CALLBACK_URL: process.env.CALLBACK_URL,


}