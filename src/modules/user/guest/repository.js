const guestCollection = require("./schema")
const organizerCollection = require("../organizer/schema")

exports.register = async (organizer, user) => {
    // add user to registration list
    let newRegistration = await organizerCollection.findById()
    newRegistration.registrations.push()

    // add event to user document
    let registered =  guestCollection.findById(user)
    registered.eventsRegisteredFor.push(user)

}

exports.manage = async (user) => {
    // retrieve all evenst user registred for

    let events = await Guest.findById(user)
                        .populate("eventsRegisteredFor")
                        
    return events
}

