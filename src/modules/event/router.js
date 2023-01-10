const eventRouter = require("express").Router()
const { createEvent } = require("./controller")


eventRouter.post("/event", createEvent)


module.exports = eventRouter