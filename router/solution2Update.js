const router = require("express").Router();
const Solution2 = require("../Models/Solution2");
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
  { name: "sol2FirstImage", maxCount: 10 },
  { name: "sol2ThirdImage", maxCount: 10 },
  { name: "sol1Fifthcard1Image", maxCount: 10 },
  { name: "sol1Fifthcard2Image", maxCount: 10 },
  { name: "sol1Fifthcard3Image", maxCount: 10 },
  { name: "sol1Fifthcard4Image", maxCount: 10 }, 
]);

router.put("/", uploadMultiple, async (req, res) => {

  // console.log(req.body);

  const filter = { _id: req.body.id };

  let sol2FirstImage1 = "";
  let sol2ThirdImage1 = "";
  let sol1Fifthcard1Image1 = "";
  let sol1Fifthcard2Image1 = "";
  let sol1Fifthcard3Image1 = "";
  let sol1Fifthcard4Image1 = "";

  try {
    const {
      pageName,
      pageDesc,
      sol2FirstMainSubHeading,
      sol2FirstMaiHeading,
      sol2FirstMainPera,
      sol2FirstHeading,
      sol2FirstPera,
      sol2SecondHeading,
      sol2SecondPera,
      sol2ThirdHeading,
      sol2ThirdPera,
      sol2FourthHeading,
      sol2FourthBtnTxt,
      sol2FourthPera,
      sol1FifthMainHeading,
      sol1Fifthcard1Text,
      sol1Fifthcard2Text,
      sol1Fifthcard3Text,
      sol1Fifthcard4Text,

      sol2FirstImage,
      sol2FirstImageFilename,
      sol2ThirdImage,
      sol2ThirdImageFilename,
      sol1Fifthcard1Image,
      sol1Fifthcard1ImageFilename,
      sol1Fifthcard2Image,
      sol1Fifthcard2ImageFilename,
      sol1Fifthcard3Image,
      sol1Fifthcard3ImageFilename,
      sol1Fifthcard4Image,
      sol1Fifthcard4ImageFilename,
    } = req.body;

    sol2FirstImage
      ? (sol2FirstImage1 = sol2FirstImage)
      : (sol2FirstImage1 = sol2FirstImageFilename);
    sol2ThirdImage
      ? (sol2ThirdImage1 = sol2ThirdImage)
      : (sol2ThirdImage1 = sol2ThirdImageFilename);
    sol1Fifthcard1Image
      ? (sol1Fifthcard1Image1 = sol1Fifthcard1Image)
      : (sol1Fifthcard1Image1 = sol1Fifthcard1ImageFilename);
    sol1Fifthcard2Image
      ? (sol1Fifthcard2Image1 = sol1Fifthcard2Image)
      : (sol1Fifthcard2Image1 = sol1Fifthcard2ImageFilename);
    sol1Fifthcard3Image
      ? (sol1Fifthcard3Image1 = sol1Fifthcard3Image)
      : (sol1Fifthcard3Image1 = sol1Fifthcard3ImageFilename);
    sol1Fifthcard4Image
      ? (sol1Fifthcard4Image1 = sol1Fifthcard4Image)
      : (sol1Fifthcard4Image1 = sol1Fifthcard4ImageFilename);

    const update = {
      pageName: pageName,
      pageDesc: pageDesc,
      sol2FirstMaiHeading: sol2FirstMaiHeading,
      sol2FirstMainSubHeading: sol2FirstMainSubHeading, 
      sol2FirstMainPera: sol2FirstMainPera,
      sol2FirstImage: sol2FirstImage1,
      sol2FirstHeading: sol2FirstHeading,
      sol2FirstPera: sol2FirstPera,
      sol2SecondHeading: sol2SecondHeading,
      sol2SecondPera: sol2SecondPera,
      sol2ThirdHeading: sol2ThirdHeading, 
      sol2ThirdPera: sol2ThirdPera,
      sol2ThirdImage: sol2ThirdImage1,
      sol2FourthHeading: sol2FourthHeading,
      sol2FourthPera: sol2FourthPera,
      sol2FourthBtnTxt: sol2FourthBtnTxt,
      sol1FifthMainHeading: sol1FifthMainHeading,
      sol1Fifthcard1Text: sol1Fifthcard1Text,
      sol1Fifthcard2Text: sol1Fifthcard2Text,
      sol1Fifthcard3Text: sol1Fifthcard3Text,
      sol1Fifthcard4Text: sol1Fifthcard4Text,
      sol1Fifthcard1Image: sol1Fifthcard1Image1,
      sol1Fifthcard2Image: sol1Fifthcard2Image1,
      sol1Fifthcard3Image: sol1Fifthcard3Image1,
      sol1Fifthcard4Image: sol1Fifthcard4Image1,
    };

    const response = await Solution2.findOneAndUpdate(filter, update);

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
