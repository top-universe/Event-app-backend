const mongoose = require("mongoose")
const { v4 } = require("uuid")

const Schema = mongoose.Schema
const eventSchema = new Schema({
  
})

const eventCollection = mongoose.model("event", eventSchema)
module.exports = eventCollection