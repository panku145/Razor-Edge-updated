const router = require("express").Router();
const mongoose = require("mongoose");

const caseStudiesSchema = mongoose.Schema({

        title:{
            type: String,
            required: true,
            unique: false,
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

const CaseStudies = mongoose.model("CaseStudies", caseStudiesSchema);

module.exports = CaseStudies;
