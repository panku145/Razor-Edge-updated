const router = require("express").Router();
const mongoose = require("mongoose");

const developmentJobsSchema = mongoose.Schema( 
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,  
      required: true,
    },
  },
);

const DevelopmentJobs = mongoose.model("DevelopmentJobs", developmentJobsSchema);

module.exports = DevelopmentJobs;
