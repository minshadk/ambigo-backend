const mongoose = require("mongoose");

const hospitalRequest = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A ambulace  must have user name"]
  },

  phoneNumber: {
    type: Number,
    required: [true, "A Donor must have a Phone Number"]
  },

  location: {
    type: {
      type: String,
      default: "Point"
    },
    coordinates: {
      type: [Number]
    }
  }
});

const HospitalRequest = mongoose.model("HospitalRequest", hospitalRequest);

module.exports = HospitalRequest;
