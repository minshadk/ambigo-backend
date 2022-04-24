const mongoose = require("mongoose");

const hospital = new mongoose.Schema({
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
    required: [true, "A Product must have a email"]
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

  address: {
    type: String
  },

  password: {
    type: String,
    required: [true, "A Product must have a password"]
  }
});

const Hospital = mongoose.model("Hospital", hospital);

module.exports = Hospital;
