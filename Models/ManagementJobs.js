const router = require("express").Router();
const mongoose = require("mongoose");

const managementJobsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const ManagementJobs = mongoose.model("ManagementJobs", managementJobsSchema);

module.exports = ManagementJobs;
