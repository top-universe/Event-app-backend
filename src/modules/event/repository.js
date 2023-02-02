const { eventCollection } = require("./schema")


exports.getEvents = async(page) => {
    let limit = 10 
    let totalPages  = await eventCollection.find().count()
    let events = await eventCollection.find()
                        .limit(10)
                        .skip((page - 1) * limit)

    return {
        page,
        totalPages,
        events
    }
}


exports.filterEvents = async(page, filter) => {
    let limit = 10 
    let totalPages  = await eventCollection.find(filter).count()
    let filtered = await eventCollection.find(filter)
                        .limit(10)
                        .skip((page - 1) * limit)

    return {
        page,
        totalPages,
        filtered
    }
}

exports.getEvent = async (id) => {
    return await eventCollection.findById(id)
}