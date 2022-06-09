const router = require("express").Router();
const mongoose = require("mongoose");

const homeProductListSchema = mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
);

const homeProducts = mongoose.model("homeProducts", homeProductListSchema);

module.exports = homeProducts;
