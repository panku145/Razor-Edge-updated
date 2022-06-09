const router = require("express").Router();
const mongoose = require("mongoose");

const careerGallerySchema = mongoose.Schema({
        img:{
            type: String,
            required: true,
        }
    },
);

const CareerGallery = mongoose.model("CareerGallery", careerGallerySchema);

module.exports = CareerGallery;
