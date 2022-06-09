const router = require("express").Router();
const mongoose = require("mongoose");

const headerSchema = mongoose.Schema({
  logo: {
    type: String,
    required: true,
  },
  home: {
    type: String,
    required: true,
  },
  whyrazoredge: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  solution: {
    type: String,
    required: true,
  },
  clients: {
    type: String,
    required: true,
  },
  career: {
    type: String,
    required: true,
  },
  register: {
    type: String,
    required: true,
  },
  registerUrl: {
    type: String,
    required: true,
  },
  signin: {
    type: String,
    required: true,
  },
  signinUrl: {
    type: String,
    required: true,
  },
});

const Header = mongoose.model("Header", headerSchema);  

module.exports = Header;
