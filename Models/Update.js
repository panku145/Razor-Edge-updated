const router = require("express").Router();
const mongoose = require("mongoose");

const updateSchema = mongoose.Schema({

    Blog:{
        heading:{
            type: String,
            required: true,
            unique: false,
        },
        pera:{
            type: String,
            required: true,
        },
        btntext:{
            type: String,
            required: true,
        }
    },
    News:{
        heading:{
            type: String,
            required: true,
            unique: false,
        },
        pera:{
            type: String,
            required: true,
        },
        btntext:{
            type: String,
            required: true,
        }
    },
    Case:{
        heading:{
            type: String,
            required: true,
            unique: false,
        },
        pera:{
            type: String,
            required: true,
        },
        btntext:{
            type: String,
            required: true,
        }
    }
});

const Update = mongoose.model("Update", updateSchema);

module.exports = Update;
