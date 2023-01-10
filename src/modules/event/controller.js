const eventRepository = require ("./repository")

exports.createEvent = async (req, res) => {
    let eventDetails = req.body
    try {
        let newEvent = await eventRepository.createvent(eventDetails)
        if (newEvent) {
            res.json({
                message: "Event created",
                Event: newEvent
            })
        }else {
            throw err
        }
    } catch (err) {
        console.log(err)
        res.json("event not createds")
        
    }
}