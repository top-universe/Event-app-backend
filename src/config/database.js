const mongoose = require("mongoose");


exports.connectToDB = async () => {

    let DATABASE = "mongodb://localhost:27107/eventapp" 

    await mongoose.connect(DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Database Connected 🚀")
    }).catch(err => {
        console.log(err)
    })
}