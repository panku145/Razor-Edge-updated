const router = require("express").Router();
const mongoose = require("mongoose");

const homeaccordianSchema = mongoose.Schema([
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
]);

const HomeAccordian = mongoose.model("HomeAccordian", homeaccordianSchema);

module.exports = HomeAccordian;
