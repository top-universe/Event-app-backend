const mongoose = require("mongoose")
const { v4 } = require("uuid")
const Schema = mongoose.Schema

const organizerSchema = new Schema({
    _id: {
        type: String,
        default: v4()
    },
    userId:  {
        type: Schema.Types.String,
        ref: "Auth"
    },
    registrations: [{
        eventId: {
            type: Schema.Types.String,
            ref: "Event"
        },
        guests : [{
            type: Schema.Types.String,
            ref: "Auth"
        }]
    }]
})

const organizerCollection = mongoose.model("organizer", organizerSchema)
module.exports = { organizerCollection, }