const express = require("express");
const router = express.Router();

const HospitalRequest = require("../models/HospitalRequest");

router.post("/", async (req, res) => {
    console.log(req.body);
    try {
      const hospitalRequest = await HospitalRequest.create(req.body);
      console.log(hospitalRequest);
      res.status(201).json({
        status: "success",
        data: {
            hospitalRequest: hospitalRequest
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
  