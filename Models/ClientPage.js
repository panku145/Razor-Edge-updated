const router = require("express").Router();
const mongoose = require("mongoose");

const clientPageSchema = mongoose.Schema({

    heading: {
      type: String,
      required: true,
    },
    subheading: {
      type: String,
      required: true,
    },
    pera: {
      type: String,
      required: true,
    },
});

const ClientPage = mongoose.model("ClientPage", clientPageSchema);

module.exports = ClientPage;
