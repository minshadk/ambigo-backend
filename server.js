const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

// Importing Routes
const ambulanceRequest = require("./routes/AmbulanceRequest");

app.use("/api/ambulanceRequest", ambulanceRequest);

mongoose
  .connect(
    "mongodb+srv://tamim:uLIOuGMei6QCoZie@cluster0.xopsx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to mongodb"))
  .catch(() => console.log("Can't connect to mongodb"));

const PORT = 5000;

app.listen(PORT, () => console.log("Listening to port 5000"));
