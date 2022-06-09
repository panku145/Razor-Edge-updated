const router = require("express").Router();
const mongoose = require("mongoose");

const caseStudyPageSchema = mongoose.Schema({
    
    caseFirstSection:{
        casefirstheading:{
            type: String,
            required: true,
        },
        casefirstsubheading:{
            type: String,
            required: true,
        },
        casefirstpera:{
            type: String,
            required: true,
        },
    },
    caseSecondSection:{
        casesecondheading:{
            type: String,
            required: true,
        },
        casesecondbtntext:{
            type: String,
            required: true,
        },
        casesecondpera:{
            type: String,
            required: true,
        },
    },
});

const CaseStudyPage = mongoose.model("CaseStudyPage", caseStudyPageSchema);

module.exports = CaseStudyPage;
