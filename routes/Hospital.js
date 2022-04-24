const express = require("express");
const router = express.Router();

const Hospital = require("../models/Hospital");
const HospitalRequest = require("../models/HospitalRequest");

router.post("/", async (req, res) => {
  try {
    const newHospital = await Hospital.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        hospital: newHospital
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

router.get("/findHospital/:id", async (req, res) => {
  console.log("find hospital called");
  try {
    const hospitalRequest = await HospitalRequest.findById(req.params.id);

    const coordinates = hospitalRequest.location.coordinates;

    const lat = coordinates[0];
    const lng = coordinates[1];

    const distanceInKilometer = 500000;
    const radius = distanceInKilometer / 6378.1;

    // const hospital = await Ambulance.find({ $and:{
    //   loc: { $geoWithin: { $centerSphere: [[lng, lat], radius] } }
    // }},)
    //   .sort("asc")
    //   .limit(5);

    // const ambulances = await Ambulance.find({
    //   $and: [
    //     { loc: { $geoWithin: { $centerSphere: [[lng, lat], radius] } } },
    //     { bloodGroup: { $eq: bloodGroup } }
    //   ]
    // })
    //   .sort("asc")
    //   .limit(5);

    const hospital = await Hospital.find({
      location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } }
    })
      .sort("asc")
      .limit(5);

    console.log(hospital);
    res.status(201).json({
      status: "success",
      data: {
        hospital: hospital
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
