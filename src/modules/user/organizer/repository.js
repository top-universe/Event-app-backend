const { organizerCollection,} = require("./schema")
const { eventCollection } = require("../../event/schema")

exports.createEvent = async ( data) => {
    // create new event
    let newEvent = new eventCollection(data)
    return newEvent.save()

}


exports.manageEvent = async (oragizerId) => {
    let events = await eventCollection.find({ oragizerId })
    
}