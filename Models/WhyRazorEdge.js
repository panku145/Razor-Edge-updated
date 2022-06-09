const router = require("express").Router();
const mongoose = require("mongoose");

const whyRazorEdgeSchema = mongoose.Schema({
    whyRazorEdgeFirstSection: {
        WRESec1heading: {
            type: String,
            required: true,
        },
        WRESec1subheading: {
            type: String,
            required: true,
        },
        WRESec1image: {
            type: String,
            required: true,
        }
    },
    whyRazorEdgeSecondSection: {
        WRESec2heading: {
            type: String,
            required: true,
        },
        WRESec2pera: {
            type: String,
            required: true,
        },
        WRESec2leftimg: {
            type: String,
            required: true,
        }, 
        WRESec2rightimg: {
            type: String,
            required: true,
        },
    },
    whyRazorEdgeThirdSection: {
        WRESec3heading: {
            type: String,
            required: true,
        },
        WRESec3SliderImage: {
            type: String,
            required: true,
        },
        WRESec3SliderPera1: {
            type: String,
            required: true,
        },
        WRESec3SliderHeading: {
            type: String,
            required: true,
        },
        WRESec3SliderPera2: {
            type: String,
            required: true,
        },
    },
    whyRazorEdgeFourthSection: {
        WRESec4Part1pera: {
            type: String,
            required: true,
        },
        WRESec4Part2pera: {
            type: String,
            required: true,
        },
        WRESec4Part3pera: {
            type: String,
            required: true,
        }
    },
    whyRazorEdgeFifthSection: {
        WRESec5heading: {
            type: String,
            required: true,
        },
        WRESec5Subheading: {
            type: String,
            required: true,
        },
        WRESec5btntxt: {
            type: String,
            required: true,
        },
    }
});

const WhyRazorEdge = mongoose.model("WhyRazorEdge", whyRazorEdgeSchema);

module.exports = WhyRazorEdge;



