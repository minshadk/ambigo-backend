const express = require("express");
const router = express.Router();

const AmbulanceRequest = require("../models/AmbulanceRequest");

// Create request
router.post("/", async (req, res) => {
  console.log("create ambulace called");
  console.log(req.body);
  try {
    const newAmbulanceRequest = await AmbulanceRequest.create(req.body);
    console.log(newAmbulanceRequest);
    res.status(201).json({
      status: "success",
      data: {
        ambulanceRequest: newAmbulanceRequest
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
