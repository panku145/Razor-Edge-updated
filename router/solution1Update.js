const router = require("express").Router();
const Solution1 = require("../Models/Solution1");
const multer = require("multer");

// <<<<<<<<<<<<<----------Upload Image------------>>>>>>>>>>>>>>>>

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) { 
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const uploadMultiple = upload.fields([
  { name: "sol1ZeroImage", maxCount: 10 },
  { name: "sol1FirstImage", maxCount: 10 },
  { name: "sol1Thirdcard1Image", maxCount: 10 },
  { name: "sol1Thirdcard2Image", maxCount: 10 },
  { name: "sol1Thirdcard3Image", maxCount: 10 },
  { name: "sol1Thirdcard4Image", maxCount: 10 },
  { name: "sol1FourthImage", maxCount: 10 },
  { name: "sol1FifthImage", maxCount: 10 },
]);

router.put("/", uploadMultiple, async (req, res) => { 

  // console.log(req.body);

  const filter = { _id: req.body.id };

  let sol1ZeroImage1 = "";
  let sol1FirstImage1 = "";
  let sol1Thirdcard1Image1 = "";
  let sol1Thirdcard2Image1 = "";
  let sol1Thirdcard3Image1 = "";
  let sol1Thirdcard4Image1 = "";
  let sol1FourthImage1 = "";
  let sol1FifthImage1 = "";

  try {
    const {
      pageName,
      pageDesc,
      sol1ZeroImage,
      sol1ZeroImageFilename,
      sol1ZeroTitle,
      sol1ZeroSubtitle,
      sol1ZeroPera,
      sol1FirstImage,
      sol1FirstImageFilename,
      sol1FirstHeading,
      sol1FirstPera,
      sol1SecondHeading,
      sol1SecondPera,
      sol1ThirdMainHeading,
      sol1Thirdcard1Image,
      sol1Thirdcard1ImageFilename,
      sol1Thirdcard1Text,
      sol1Thirdcard2Image,
      sol1Thirdcard2ImageFilename,
      sol1Thirdcard2Text,
      sol1Thirdcard3Image,
      sol1Thirdcard3ImageFilename,
      sol1Thirdcard3Text,
      sol1Thirdcard4Image,
      sol1Thirdcard4ImageFilename,
      sol1Thirdcard4Text,
      sol1FourthImage,
      sol1FourthImageFilename,
      sol1FourthHeading,
      sol1FourthPera,
      sol1FifthImage,
      sol1FifthImageFilename,
      sol1FifthHeading,
      sol1FifthPera,
      sol1FifthBtnText,
    } = req.body;

    sol1ZeroImage
      ? (sol1ZeroImage1 = sol1ZeroImage)
      : (sol1ZeroImage1 = sol1ZeroImageFilename);
    sol1FirstImage
      ? (sol1FirstImage1 = sol1FirstImage)
      : (sol1FirstImage1 = sol1FirstImageFilename);
    sol1Thirdcard1Image
      ? (sol1Thirdcard1Image1 = sol1Thirdcard1Image)
      : (sol1Thirdcard1Image1 = sol1Thirdcard1ImageFilename);
    sol1Thirdcard2Image
      ? (sol1Thirdcard2Image1 = sol1Thirdcard2Image)
      : (sol1Thirdcard2Image1 = sol1Thirdcard2ImageFilename);
    sol1Thirdcard3Image
      ? (sol1Thirdcard3Image1 = sol1Thirdcard3Image)
      : (sol1Thirdcard3Image1 = sol1Thirdcard3ImageFilename);
    sol1Thirdcard4Image
      ? (sol1Thirdcard4Image1 = sol1Thirdcard4Image)
      : (sol1Thirdcard4Image1 = sol1Thirdcard4ImageFilename);
    sol1FourthImage
      ? (sol1FourthImage1 = sol1FourthImage)
      : (sol1FourthImage1 = sol1FourthImageFilename);
    sol1FifthImage
      ? (sol1FifthImage1 = sol1FifthImage)
      : (sol1FifthImage1 = sol1FifthImageFilename);

    const update = {
      pageName: pageName,
      pageDesc: pageDesc,
      sol1ZeroImage: sol1ZeroImage1,
      sol1ZeroTitle: sol1ZeroTitle,
      sol1ZeroSubtitle: sol1ZeroSubtitle,
      sol1ZeroPera: sol1ZeroPera,
      sol1FirstImage: sol1FirstImage1,
      sol1FirstHeading: sol1FirstHeading,
      sol1FirstPera: sol1FirstPera,
      sol1SecondHeading: sol1SecondHeading,
      sol1SecondPera: sol1SecondPera,
      sol1ThirdMainHeading: sol1ThirdMainHeading,
      sol1Thirdcard1Text: sol1Thirdcard1Text,
      sol1Thirdcard1Image: sol1Thirdcard1Image1,
      sol1Thirdcard2Text: sol1Thirdcard2Text,
      sol1Thirdcard2Image: sol1Thirdcard2Image1,
      sol1Thirdcard3Text: sol1Thirdcard3Text,
      sol1Thirdcard3Image: sol1Thirdcard3Image1,
      sol1Thirdcard4Text: sol1Thirdcard4Text,
      sol1Thirdcard4Image: sol1Thirdcard4Image1,
      sol1FourthImage: sol1FourthImage1, 
      sol1FourthHeading: sol1FourthHeading,
      sol1FourthPera: sol1FourthPera,
      sol1FifthImage: sol1FifthImage1,
      sol1FifthHeading: sol1FifthHeading,
      sol1FifthPera: sol1FifthPera,
      sol1FifthBtnText: sol1FifthBtnText,
    };

    const response = await Solution1.findOneAndUpdate(filter, update);

    if (response) {
      res.status(200).send(update);
    } else {
      res.status(500).json({ error: "failed to update successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
