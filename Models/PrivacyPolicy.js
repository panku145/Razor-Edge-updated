const router = require("express").Router();
const mongoose = require("mongoose");

const PrivacyPolicySchema = mongoose.Schema({  

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

const PrivacyPolicy = mongoose.model("PrivacyPolicy", PrivacyPolicySchema);

module.exports = PrivacyPolicy;
