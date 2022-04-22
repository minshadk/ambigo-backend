const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Register
router.post("/", async (req, res) => {
  console.log("create ambulace called");
  console.log(req.body);
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        user: newUser
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Invalid data send",
      err
    });
  }
});

// Login
router.post("/login", async (req, res) => {
  console.log("create ambulace called");
  console.log(req.body);
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password
    });

    res.status(201).json({
      status: "Login success full",
      data: {
        user: user
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Invalid data send",
      err
    });
  }
});

module.exports = router;
