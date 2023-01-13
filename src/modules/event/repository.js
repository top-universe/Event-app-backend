const Event = require("./schema");

exports.eventRepository = {
  // get single event
  getEvent: async (id) => {
    return Event.findOne({ _id: id });
  },

  //   create a new event
  createvent: async (data) => {
    let newEvent = new Event(data);
    await newEvent.save();
    return newEvent;
  },

  //   delete an event
  deleteEvent: async (id) => {
    return await Event.findByIAndDelete(id);
  },
};
