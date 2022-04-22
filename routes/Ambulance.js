const express = require("express");
const router = express.Router();
const Ambulance = require("../models/Ambulance");

// Create request
router.post("/", async (req, res) => {
  console.log("create ambulace called");
  console.log(req.body);
  try {
    const newAmbulance = await Ambulance.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        ambulance: newAmbulance
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
