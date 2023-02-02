const mongoose = require("mongoose")
const { v4 } = require("uuid")
const Schema = mongoose.Schema
const { v4 } = require("uuid")

const eventSchema = new Schema({
    _id: {
        type: String,
        default: v4()
    },
    info: {
        type: String,
        required: true
    },
    organizer: {
        type: Schema.Types.String,
        ref: "Organizer"
    },
    eventType: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: true
    },
    tags: [{
        type: String,
        required: true
    }],
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date
    },
    Time: {
        type: Date
    }

})


const eventCollection = mongoose.model("event", eventSchema)

module.exports = { eventCollection, }