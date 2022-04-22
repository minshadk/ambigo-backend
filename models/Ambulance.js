const mongoose = require("mongoose");

const ambulance = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A ambulace  must have a driver name"]
  },

  phoneNumber: {
    type: Number,
    required: [true, "A ambulace  must have Phone Number"]
  },

  location: {
    type: {
      type: String,
      default: "Point"
    },
    coordinates: {
      type: [Number]
    }
    // required: [true, "A blood request must have a location"]
  }
});

const Ambulance = mongoose.model("Ambulance", ambulance);

module.exports = Ambulance;
