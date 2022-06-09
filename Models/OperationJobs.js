const router = require("express").Router();
const mongoose = require("mongoose");

const operationJobsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true, 
  },
});

const OperationJobs = mongoose.model("OperationJobs", operationJobsSchema);

module.exports = OperationJobs;
