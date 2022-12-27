const mongoose = require("mongoose");

//database connection function
exports.connectToDB = () => {

    let DATABASE = AppConfig.DATABASE

    mongoose.connect(DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Database Connected")
    }).catch(err => {
        console.log(err)
    })
}