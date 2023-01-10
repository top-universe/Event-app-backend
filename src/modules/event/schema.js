const mongoose = require("mongoose")
const { v4 } = require("uuid")

const Schema = new mongoose.Schema({
    _id: {
        type: String,
        default: v4()
    },
    organizerId: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    eventType: {
        type: String,
        required: true
    },
    eventCategory: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        rquired: false
    },
    location: {
        online: {
            status: false,
            venue: { type: String },
        },
        offline: {
            status: false,

        },
        toBeAnnounced: {
            status: false
        }
    },
    dateAndTime: {
        startDate:{ 
            type: Date
         },
        endDate: {
            type: Date
        },
        startTime: { 
            type: String
        },
        endTime: {
            type: String
        },
        displayTime: {
            type: Boolean,
            default: true
        }
    }
}, 
{
    timestamps: true
}
)

const eventSchema = mongoose.model("event", Schema)
module.exports = eventSchema