const router = require("express").Router();
const mongoose = require("mongoose");

const homeSchema = mongoose.Schema({
  heroSection: {
    heroMainHeading: { 
      type: String,
      required: true,
    },
    herofirstbtn: {
      type: String,
      required: true,
    },
    herofirstbtnUrl: {
      type: String,
      required: true,
    },
    herosecondbtn: {
      type: String,
      required: true,
    },
    herosecondbtnUrl: { 
      type: String,
      required: true,
    },
    herovideoimage: {
      type: String,
      required: true,
    },
    herosubheading: {
      type: String,
      required: true,
    },
    heropera: {
      type: String,
      required: true,
    },
  },
  bulletSection: {
    bulletimage: {
      type: String,
      required: true,
    },
  },
  ourSolutions: {
    heading: {
      type: String,
      required: true,
    },
    subheading: {
      type: String,
      required: true,
    },
    solutionimage: {
      type: String,
      required: true,
    },
    mainheading: {
      type: String,
      required: true,
    },
    pera: {
      type: String,
      required: true,
    },
  },
  OurProducts: {
    heading: {
      type: String,
      required: true,
    },
    subheading: {
      type: String,
      required: true,
    },
    mainimage: {
      type: String,
      required: true,
    },
  },
});

const Home = mongoose.model("Home", homeSchema);

module.exports = Home;
