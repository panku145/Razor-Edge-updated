const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  pageName: {
    type: String,
    required: true,
  },
  pageDesc: {
    type: String,
    required: true,
  },
  proFirstHeading: {
    type: String,
    required: true,
  },
  proFirstSubHeading: {
    type: String,
    required: true,
  },
  proFirstPera: {
    type: String,
    required: true,
  },
  proFirstImage: {
    type: String,
    required: true,
  },
  proSecondHeading: {
    type: String,
    required: true,
  },
  proSecondSubHeading: {
    type: String,
    required: true,
  },
  proSecondImage: {
    type: String,
    required: true,
  },
  proSecondBullets: {
    type: String,
    required: true,
  },
  proThirdHeading: {
    type: String,
    required: true,
  },
  proThirdPera: {
    type: String,
    required: true,
  },
  proThirdImage: {
    type: String,
    required: true,
  },
  proThirdAccordia: {
    type: Array,
    required: true,
  },
  proFourthCards1img: { type: String, required: true },
  proFourthCards1title: { type: String, required: true },
  proFourthCards1desc: { type: String, required: true },
  proFourthCards2img: { type: String, required: true },
  proFourthCards2title: { type: String, required: true },
  proFourthCards2desc: { type: String, required: true },
  proFourthCards3img: { type: String, required: true },
  proFourthCards3title: { type: String, required: true },
  proFourthCards3desc: { type: String, required: true },
  proFourthCards4img: { type: String, required: true },
  proFourthCards4title: { type: String, required: true },
  proFourthCards4desc: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
