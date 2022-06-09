const router = require("express").Router();
const mongoose = require("mongoose");

const partnersSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    subheading: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
);

const Partners = mongoose.model("Partners", partnersSchema);  

module.exports = Partners;
