const mongoose = require("mongoose")
const { v4 } = require("uuid")
const Schema = mongoose.Schema

const guestSchema = new Schema ({
    _id: {
        type: String,
        default: v4()
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "Auth"
    },
    eventsRegistered: [{
        type: Schema.Types.ObjectId,
        ref: "Event"
    }]
})

const guestCollection = mongoose.model("guest", guestSchema)
module.exports = { guestCollection, }