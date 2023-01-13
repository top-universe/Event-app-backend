const { eventController } = require("./controller")

const eventRouter  = require("express").Router()

// routes
eventRouter.get('/event/:id', eventController)