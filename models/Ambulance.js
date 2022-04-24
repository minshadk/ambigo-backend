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

  email: {
    type: String,
  },

  type: {
    type: String,
    required: [true, "A Ambulance must have a type"],
  },

  location: {
    type: {
      type: String,
      default: "Point"
    },
    coordinates: {
      type: [Number]
    } 
  },
  
  password: {
    type: String,
    required: [true, "A Product must have a password"]
  }
});

const Ambulance = mongoose.model("Ambulance", ambulance);

module.exports = Ambulance;
