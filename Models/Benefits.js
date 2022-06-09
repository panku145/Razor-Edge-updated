const router = require("express").Router();
const mongoose = require("mongoose");

const benefitsSchema = mongoose.Schema({

        title:{
            type: String,
            required: true,
        },
        desc:{
            type: String,
            required: true,
        },
        img:{
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

const Benefits = mongoose.model("Benefits", benefitsSchema);

module.exports = Benefits;
