const router = require("express").Router();
const mongoose = require("mongoose");

const newsRoomSchema = mongoose.Schema({
    
    newsFirstSection:{
        newsfirstheading:{
            type: String,
            required: true,
        },
        newsfirstsubheading:{
            type: String,
            required: true,
        },
        newsfirstpera:{
            type: String,
            required: true,
        },
    },
    newsSecondSection:{
        newssecondheading:{
            type: String,
            required: true,
        },
        newssecondbtntext:{
            type: String,
            required: true,
        },
        newssecondpera:{
            type: String,
            required: true,
        },
    },
});

const NewsRoom = mongoose.model("NewsRoom", newsRoomSchema);

module.exports = NewsRoom;
