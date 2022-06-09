const router = require("express").Router();
const mongoose = require("mongoose");

const disclaimerSchema = mongoose.Schema({  

        title:{
            type: String,
            required: true,
        },
        desc:{
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

const Disclaimer = mongoose.model("Disclaimer", disclaimerSchema);

module.exports = Disclaimer;
