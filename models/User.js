const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "A Product must have a name"],
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, "A Product must have a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "A Product must have a password"]
  },

});

const User = mongoose.model("User", userSchema);

module.exports = User;
