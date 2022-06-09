const router = require("express").Router();
const Solution2 = require("../Models/Solution2");
const multer = require("multer");

// <<<<<<<<<<<<<----------Upload Image------------>>>>>>>>>>>>>>>>

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
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

router.post("/", uploadMultiple, async (req, res) => {

  try {
    const solution2 = new Solution2({
      pageName: req.body.pageName,
      pageDesc: req.body.pageDesc,
      sol2FirstMaiHeading: req.body.sol2FirstMaiHeading,
      sol2FirstMainSubHeading: req.body.sol2FirstMainSubHeading,
      sol2FirstMainPera: req.body.sol2FirstMainPera,
      sol2FirstImage: req.body.sol2FirstImageFilename,
      sol2FirstHeading: req.body.sol2FirstHeading,
      sol2FirstPera: req.body.sol2FirstPera,
      sol2SecondHeading: req.body.sol2SecondHeading,
      sol2SecondPera: req.body.sol2SecondPera,
      sol2ThirdHeading: req.body.sol2ThirdHeading,
      sol2ThirdPera: req.body.sol2ThirdPera,
      sol2ThirdImage: req.body.sol2ThirdImageFilename,
      sol2FourthHeading: req.body.sol2FourthHeading,
      sol2FourthPera: req.body.sol2FourthPera,
      sol2FourthBtnTxt: req.body.sol2FourthBtnTxt,

      sol1FifthMainHeading: req.body.sol1FifthMainHeading,
      sol1Fifthcard1Image: req.body.sol1Fifthcard1ImageFilename,
      sol1Fifthcard1Text: req.body.sol1Fifthcard1Text,
      sol1Fifthcard2Image: req.body.sol1Fifthcard2ImageFilename,
      sol1Fifthcard2Text: req.body.sol1Fifthcard2Text,
      sol1Fifthcard3Image: req.body.sol1Fifthcard3ImageFilename,
      sol1Fifthcard3Text: req.body.sol1Fifthcard3Text,
      sol1Fifthcard4Image: req.body.sol1Fifthcard4ImageFilename,
      sol1Fifthcard4Text: req.body.sol1Fifthcard4Text,
    });

    const response = await solution2.save();

    if (response) {
      res.status(200).send({ message: "Data save successfully" });
    } else {
      res.status(500).send({ error: "failed to save successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// router.use("/", async (req, res) => {
//   try {
//     const solution2 = new Solution2({
//             pageName:'Soluction-2',
//             pageDesc:'Lorem, ipsum dolor sit amet consectetur adipisicing consectetur.',
//             sol2FirstMaiHeading:'Purpose-built insights',
//             sol2FirstMainSubHeading:'INVESTOR SENTIMENT',
//             sol2FirstMainPera:'Timely and actionable investor sentiment insights to strengthen your decision-making.',
//             sol2FirstImage:'../images/why-us/why-us.jpg',
//             sol2FirstHeading:'Data you can trust',
//             sol2FirstPera:'Our direct data feeds aggregate all your portfolio, market and client data in a single place. We then verify and standardize it across liquid and illiquid assets. Having all this data in a common format allows you to conduct deep analysis and get actionable insights on every type of asset class in a portfolio.',
//             sol2SecondHeading:'Unlock the value of your data',
//             sol2SecondPera:'Our APIs ensure that this higher quality data flows across systems, so you can efficiently automate workflows and power your business-critical applications. With Addepar as the hub for your operations, you have a consolidated, “go-to” place for critical information, eliminating the need for duplicative data entry and system cross-checks.',
//             sol2ThirdHeading:'Connect with the tools you use every day',
//             sol2ThirdPera:'Connect Razor Egde to all the tools you need to run your business. We’ve pre-built many popular and useful integrations with market-leading applications to get you off to a running start. This helps you increase your productivity and get more out of your existing software.',
//             sol2ThirdImage:'../images/integration/bullets-img.png',
//             sol2FourthHeading:'Stay Updated With Latest Updates',
//             sol2FourthPera:'Connect Razor Edge to all the tools you need to run your business. We’ve pre-built many popular and useful integrations with market-leading applications to get you off to a running start. This helps you increase your productivity and get more out of your existing software.',
//             sol2FourthBtnTxt:'NEWS ROOM2',
//     });

//     const response = await solution2.save();

//     if (response) {
//       res.status(200).send({ message: "Data save successfully" });
//     } else {
//       res.status(500).send({ error: "failed to save successfully" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

module.exports = router;
