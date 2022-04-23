const express = require("express");
const router = express.Router();
const Ambulance = require("../models/Ambulance");
const AmbulanceRequest = require("../models/AmbulanceRequest");

// Create request
router.post("/", async (req, res) => {
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

// Login
router.post("/login", async (req, res) => {
  console.log("create ambulace called");
  console.log(req.body);
  try {
    const user = await Ambulance.findOne({
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
    console.log(err);
    res.status(400).json({
      status: "failed",
      message: "Invalid data send",
      err
    });
  }
});

// find Ambulance
router.get("allAmbulance", async (req, res) => {
  try {
    const allambulanceRequest = await AmbulanceRequest.find();
    console.log(ambulanceRequest);
    res.status(201).json({
      status: "Login success full",
      data: {
        allambulanceRequest: allambulanceRequest
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "failed",
      message: "Invalid data send",
      err
    });
  }
});

router.get("/findAmbulance/:id", async (req, res) => {
  try {
    const ambulanceRequest = await AmbulanceRequest.findById(req.params.id);

    const coordinates = ambulanceRequest.location.coordinates;

    const lat = coordinates[0];
    const lng = coordinates[1];

    const distanceInKilometer = 500000;
    const radius = distanceInKilometer / 6378.1;

    const ambulances = await Ambulance.find({ $and:{
      loc: { $geoWithin: { $centerSphere: [[lng, lat], radius] } }
    }},)
      .sort("asc")
      .limit(5);

    console.log(ambulances);
    res.status(201).json({
      status: "success",
      data: {
        ambulances: ambulances
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "failed",
      message: "Invalid data send",
      err
    });
  }
});

module.exports = router;
