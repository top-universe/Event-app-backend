const { getEvents, filterEvents, getEvent} = require("./repository")

// get all events
exports.getEvnts = async (page) => {
    return await getEvents(page)
}

// get filtered events
exports.filterEvnts = async (page, filter) => {
    return await filterEvents(page, filter)
}


// get a particular event
exports.getEvnt = async(id) => {
    return await getEvent(id)
}

