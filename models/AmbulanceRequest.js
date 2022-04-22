const mongoose = require("mongoose");

const ambulanceRequest = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A ambulace  must have user name"],
  },

  phoneNumber: {
    type: Number,
    required: [true, "A Donor must have a Phone Number"],
  },

  location: {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: {
      type: [Number],
    },
    // required: [true, "A blood request must have a location"]
  },
});

const AmbulanceRequest = mongoose.model("AmbulanceRequest", ambulanceRequest);

module.exports = AmbulanceRequest;
