const router = require("express").Router();
const mongoose = require("mongoose");

const CareerSchema = mongoose.Schema({

        Sec1:{
            heading:{
                type: String,
                required: true,
            },
            subheading:{
                type: String,
                required: true,
            },
            btntxt:{
                type: String,
                required: true,
            },
            img:{
                type: String,
                required: true,
            }
        },
        Sec2:{
            heading:{
                type: String,
                required: true,
            },
            pera:{
                type: String,
                required: true,
            }
        },
        Sec3:{
            heading:{
                type: String,
                required: true,
            },
            subheading:{
                type: String,
                required: true,
            },
        },
        sec4:{
            heading:{
                type: String,
                required: true,
            },
            subheading:{
                type: String,
                required: true,
            }
        }
    },
);

const CareerPage = mongoose.model("CareerPage", CareerSchema);

module.exports = CareerPage;
