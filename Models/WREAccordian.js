const router = require("express").Router();
const mongoose = require("mongoose");

const WREaccordianSchema = mongoose.Schema([
  {
    accordianHeading: {
      type: String,
      required: true,
    },
    accordianDecs: {
      type: String,
      required: true,
    },
  },
]);

const WREAccordian = mongoose.model("WREAccordian", WREaccordianSchema);

module.exports = WREAccordian;
