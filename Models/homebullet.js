const router = require("express").Router();
const mongoose = require("mongoose");

const homebulletSchema = mongoose.Schema(
  {
    text: {
      type: String, 
      required: true,
    }
  },
);

const homebullet = mongoose.model("homebullet", homebulletSchema);

module.exports = homebullet;
