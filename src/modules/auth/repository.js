const authCollection = require("./schema")


//get user from db
exports.getUser = async (email) => {

    return authCollection.findOne({ email })
}

//create and save new user to db
exports.createNewUser = async(googleId, email, username) => {
    try {
        let user = {
            googleId: googleId,
            email: email,
            username: username,
        }

        //save user details
        let newUser = new authCollection(user)
        return newUser.save()

    } catch (err) {
        console.log(err)
    }
}