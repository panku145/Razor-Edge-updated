const router = require("express").Router();
const mongoose = require("mongoose");

const clientGallerySchema = mongoose.Schema(
  {
    heading: {
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
  },
);

const ClientGallery = mongoose.model("ClientGallery", clientGallerySchema);

module.exports = ClientGallery;
