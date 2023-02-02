const { getEvnts, filterEvnts, getEvnt} = require("./model")

// get all events
exports.getEvents = async (req,res) => {
    let page = req.query.page

    try {
        let event =  await getEvnts(page)
        res.json(event)
        
    } catch (err) {
        res.json({"Error":err.message})
    }
}

// get filtered events
exports.filterEvents = async(page, filter) => {
    let { page, filter } = req.query
    try {
        let events = await filterEvnts(page, filter)
        res.json(events)
    } catch (err) {
        res.json({"Error":err.message})
    }
}


// get a particular event
exports.getEvent = async(req, res) => {
    let eventId = req.params.id
    return await getEvnt(eventId)
}