const Event = require("./schema")

exports.getEvent = async(id) =>{
    return Event.findOne({ _id: id})
}

exports.createvent = async(data) => {
    let newEvent = new Event(data)
    await newEvent.save()
    return newEvent
}

exports.deleteEvent = async(id) => {
    return await Event.findByIAndDelete(id)
}