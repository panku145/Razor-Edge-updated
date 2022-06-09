const mongoose = require("mongoose");

const solution1Schema = mongoose.Schema({
  pageName: {
    type: String,
    required: true,
  },
  pageDesc: {
    type: String,
    required: true,
  },
  sol1ZeroImage: {
    type: String,
    required: true,
  },
  sol1ZeroTitle: {
    type: String,
    required: true,
  },
  sol1ZeroSubtitle: {
    type: String,
    required: true,
  },
  sol1ZeroPera: {
    type: String,
    required: true,
  },
  sol1FirstImage: {
    type: String,
    required: true,
  },
  sol1FirstHeading: {
    type: String,
    required: true,
  },
  sol1FirstPera: {
    type: String,
    required: true,
  },
  sol1SecondHeading: {
    type: String,
    required: true,
  },
  sol1SecondPera: {
    type: String,
    required: true,
  },
  sol1ThirdMainHeading: {
    type: String,
    required: true,
  },
  sol1Thirdcard1Image: {
    type: String,
    required: true,
  },
  sol1Thirdcard1Text: {
    type: String,
    required: true,
  },
  sol1Thirdcard2Image: {
    type: String,
    required: true,
  },
  sol1Thirdcard2Text: {
    type: String,
    required: true,
  },
  sol1Thirdcard3Image: {
    type: String,
    required: true,
  },
  sol1Thirdcard3Text: {
    type: String,
    required: true,
  },
  sol1Thirdcard4Image: {
    type: String,
    required: true,
  },
  sol1Thirdcard4Text: {
    type: String,
    required: true,
  },
  sol1FourthImage: {
    type: String,
    required: true,
  },
  sol1FourthHeading: {
    type: String,
    required: true,
  },
  sol1FourthPera: {
    type: String,
    required: true,
  },
  sol1FifthImage: {
    type: String,
    required: true,
  },
  sol1FifthHeading: {
    type: String,
    required: true,
  },
  sol1FifthPera: {
    type: String,
    required: true,
  },
  sol1FifthBtnText: {
    type: String,
    required: true,
  },
});

const Solution1 = mongoose.model("Solution1", solution1Schema);

module.exports = Solution1;
