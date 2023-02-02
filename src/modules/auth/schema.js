const mongoose = require("mongoose")
const { v4 } = require("uuid")

const Schema = mongoose.Schema
const authSchema = new Schema({
    
    googleId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true

    },
    picture: {
        type: String,
        required: true

    }
})

const authCollection = mongoose.model("auth", authSchema)
module.exports = {authCollection}