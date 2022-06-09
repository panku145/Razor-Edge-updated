const router = require("express").Router();
const mongoose = require("mongoose");

const caseHeaderSchema = mongoose.Schema({
    
    heading:{
        type: String,
        required: true,
    },
    subheading:{
        type: String,
        required: true,
    },
    pera:{
        type: String,
        required: true,
    },
});

const CaseHeader = mongoose.model("CaseHeader", caseHeaderSchema);

module.exports = CaseHeader;
