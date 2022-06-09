const router = require("express").Router();
const mongoose = require("mongoose");

const blogHeaderSchema = mongoose.Schema({
    
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

const BlogHeader = mongoose.model("BlogHeader", blogHeaderSchema);

module.exports = BlogHeader;
