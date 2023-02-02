const { authCollection } = require("./schema")


//get user from db
exports.getUser = async (email) => {
    return authCollection.findOne({ email })
}

//create and save new user to db
exports.createNewUser = async (googleId, email, firstname, lastname, picture) => {
    try {
        let user = {
            googleId: googleId,
            email: email,
            firstname: firstname,
            lastname: lastname,
            picture: picture
        }

        //save user details
        let newUser = new authCollection(user)
        return newUser.save()

    } catch (err) {
        console.log(err)
    }
}

exports.checkIfUserExist = async (email) => {
    let currentUser = authCollection.findOne({ email })
    let result = currentUser ? currentUser : false
    return result
  }
  
