const router = require("express").Router();
const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({

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

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
