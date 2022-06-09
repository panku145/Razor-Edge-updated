const router = require("express").Router();
const mongoose = require("mongoose");

const bloogPageSchema = mongoose.Schema({
    
    blogFirstSection:{
        blogfirstheading:{
            type: String,
            required: true,
        },
        blogfirstsubheading:{
            type: String,
            required: true,
        },
        blogfirstpera:{
            type: String,
            required: true,
        },
    },
    blogSecondSection:{
        blogsecondheading:{
            type: String,
            required: true,
        },
        blogsecondbtntext:{
            type: String,
            required: true,
        },
        blogsecondpera:{
            type: String,
            required: true,
        },
    },
});

const BlogPage = mongoose.model("BlogPage", bloogPageSchema);

module.exports = BlogPage;
