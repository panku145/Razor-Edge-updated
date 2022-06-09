const router = require("express").Router();
const mongoose = require("mongoose");

const partnersServiceSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const PartnersService = mongoose.model("PartnersService",partnersServiceSchema);  

module.exports = PartnersService;
