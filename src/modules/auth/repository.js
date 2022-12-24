const mongoose = require("mongoose")
const { v4 } = require("uuid")
const authCollection = require("./schema")

exports.getUser = async (email) => {

    return userCollection.findOne({email})
}

exports.createNewUser = async(googleId, email, username) => {
    try {
        let user = {
            googleId: googleId,
            email: email,
            userame: username,
        }

        //save user details
        let newUser = new authCollection(user)
        newUser.save()

        //filter result
        return {
            id: newUser._id,
            email: newUser.email
        }

    } catch (err) {
        console.log(err)
    }
}