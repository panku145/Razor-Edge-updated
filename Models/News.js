const router = require("express").Router();
const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({

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

const News = mongoose.model("News", newsSchema);

module.exports = News;
