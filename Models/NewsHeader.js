const router = require("express").Router();
const mongoose = require("mongoose");

const newsHeaderSchema = mongoose.Schema({
    
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

const NewsHeader = mongoose.model("NewsHeader", newsHeaderSchema);

module.exports = NewsHeader;
