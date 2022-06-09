const router = require("express").Router();
const mongoose = require("mongoose");

const footerSchema = mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  companyDesc: {
    type: String,
    required: true,
  },
  btnText: {
    type: String,
    required: true,
  },
  heading1: {
    type: String,
    required: true,
  },
  page1: {
    type: String,
    required: true,
  },
  page2: {
    type: String,
    required: true,
  },
  page3: {
    type: String,
    required: true,
  },
  page4: {
    type: String,
    required: true,
  },
  page4Url: { 
    type: String,
    required: true,
  },
  heading2: {
    type: String,
    required: true,
  },
  page5: {
    type: String,
    required: true,
  },
  page6: {
    type: String,
    required: true,
  },
  heading3: {
    type: String,
    required: true,
  },
  page7: {
    type: String,
    required: true,
  },
  page8: {
    type: String,
    required: true,
  },
  heading4: {
    type: String,
    required: true,
  },
  address1title: {
    type: String,
    required: true,
  },
  address1desc: {
    type: String,
    required: true,
  },
  address2title: {
    type: String,
    required: true,
  },
  address2desc: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  heading5: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  copyright: {
    type: String,
    required: true,
  },
  facebookURL: {
    type: String,
    required: true,
  },
  youtubeURL: {
    type: String,
    required: true,
  },
  linkedinURL: {
    type: String,
    required: true,
  },
  twitterURL: {
    type: String,
    required: true,
  },
});

const Footer = mongoose.model("Footer", footerSchema);

module.exports = Footer; 
