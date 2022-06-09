const router = require("express").Router();
const Home = require("../Models/Home");
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
  { name: "herovideoimage", maxCount: 10 },
  { name: "bulletimage", maxCount: 10 },
  { name: "solutionimage", maxCount: 10 },
  { name: "proSecmainimage", maxCount: 10 },
]);

router.put("/", uploadMultiple, async (req, res) => {

  const filter = { _id: req.body.id };

  let herovideoimage1 = "";
  let bulletimage1 = "";
  let solutionimage1 = "";
  let proSecmainimage1 = "";

  try {

    const {
      heroMainHeading,
      herofirstbtn,
      herofirstbtnUrl,
      herosecondbtn,
      herosecondbtnUrl,
      herosubheading,
      heropera,
      heading,
      subheading,
      mainheading,
      pera,
      proSecHeading,
      proSecsubheading,

      herovideoimage,
      bulletimage,
      solutionimage,
      proSecmainimage,
      herovideoimageFilename,
      bulletimageFilename,
      solutionimageFilename,
      proSecmainimageFilename,
    } = req.body;

    herovideoimage
      ? (herovideoimage1 = herovideoimage)
      : (herovideoimage1 = herovideoimageFilename);
    bulletimage
      ? (bulletimage1 = bulletimage)
      : (bulletimage1 = bulletimageFilename);
    solutionimage
      ? (solutionimage1 = solutionimage)
      : (solutionimage1 = solutionimageFilename);
    proSecmainimage
      ? (proSecmainimage1 = proSecmainimage)
      : (proSecmainimage1 = proSecmainimageFilename);  

    const update = {
      heroSection:{
        heroMainHeading:heroMainHeading,
        herofirstbtn:herofirstbtn,
        herofirstbtnUrl:herofirstbtnUrl,
        herosecondbtn:herosecondbtn,
        herosecondbtnUrl:herosecondbtnUrl,
        herovideoimage: herovideoimage1,
        herosubheading:herosubheading,
        heropera:heropera,
      },
      bulletSection:{
      bulletimage: bulletimage1,
      },
      ourSolutions:{
        heading:heading,
        subheading:subheading,
        solutionimage:solutionimage1,
        mainheading:mainheading,
        pera:pera,
      },
      OurProducts:{
        heading:proSecHeading,
        subheading:proSecsubheading,
        mainimage:proSecmainimage1,
      }
    }

    const response = await Home.findOneAndUpdate(filter, update);

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
