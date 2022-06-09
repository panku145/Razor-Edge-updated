const router = require("express").Router();
const mongoose = require("mongoose");

const testimonialSchema = mongoose.Schema({

        img:{
            type: String,
            required: true,
        },
        desc:{
            type: String,
            required: true,
        },
        logo:{
            type: String,
            required: true,
        }
    },
);

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

module.exports = Testimonial;
