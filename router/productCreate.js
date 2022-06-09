const router = require("express").Router();
const Product = require("../Models/Product");
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
  { name: "proFirstImage", maxCount: 10 },
  { name: "proSecondImage", maxCount: 10 },
  { name: "proThirdImage", maxCount: 10 },
  { name: "proFourthCards1img", maxCount: 10 },
  { name: "proFourthCards2img", maxCount: 10 },
  { name: "proFourthCards3img", maxCount: 10 },
  { name: "proFourthCards4img", maxCount: 10 },
]);

router.post("/", uploadMultiple, async (req, res) => {
  // console.log(req.body);
  try {
    const product = new Product({
      pageName: req.body.pageName,
      pageDesc: req.body.pageDesc,
      proFirstHeading: req.body.proFirstHeading,
      proFirstSubHeading: req.body.proFirstSubHeading,
      proFirstPera: req.body.proFirstPera,
      proFirstImage: req.body.proFirstImageFilename,
      proSecondHeading: req.body.proSecondHeading,
      proSecondSubHeading: req.body.proSecondSubHeading,
      proSecondImage: req.body.proSecondImageFilename,
      proSecondBullets: 'testing',
      proThirdHeading: req.body.proThirdHeading,
      proThirdPera: req.body.proThirdPera,
      proThirdImage: req.body.proThirdImageFilename,
      proThirdAccordia: [
        {
          title: "Asset Owner",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque nisi voluptatum labore iusto est commodi cupiditate omnis laboriosam eligendi corporis! Lorem",
        },
        {
          title: "Asset Owner",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque nisi voluptatum labore iusto est commodi cupiditate omnis laboriosam eligendi corporis! Lorem",
        },
        {
          title: "Asset Owner",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque nisi voluptatum labore iusto est commodi cupiditate omnis laboriosam eligendi corporis! Lorem",
        },
      ],
      proFourthCards1img: req.body.proFourthCards1imgFilename,
      proFourthCards1title: req.body.proFourthCards1title,
      proFourthCards1desc: req.body.proFourthCards1desc,
      proFourthCards2img: req.body.proFourthCards2imgFilename,
      proFourthCards2title: req.body.proFourthCards2title,
      proFourthCards2desc: req.body.proFourthCards2desc,
      proFourthCards3img: req.body.proFourthCards3imgFilename,
      proFourthCards3title: req.body.proFourthCards3title, 
      proFourthCards3desc: req.body.proFourthCards3desc, 
      proFourthCards4img: req.body.proFourthCards4imgFilename,
      proFourthCards4title: req.body.proFourthCards4title,
      proFourthCards4desc: req.body.proFourthCards4desc,
    });

    const response = await product.save();

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
//     const product = new Product({
//       pageName: "Product-1",
//       pageDesc:
//         "Lorem, ipsum dolor sit amet consectetur adipisicing consectetur.",
//       proFirstHeading: "The power to achieve more",
//       proFirstSubHeading: "REGISTERED INVESTMENT ADVISOR",
//       proFirstPera:
//         "Razor Edge's Factor Edge platform allows you to spend time on what matters most, investing in client relationships.",
//       proFirstImage: "product1.jpg",
//       proSecondHeading:
//         "You rely on innovative technology to increase efficiency and scale.",
//       proSecondSubHeading: "FACTOR EDGE FOR MODERN ADVISORS",
//       proSecondImage: "product2.jpg",
//       proSecondBullets: [
//         "Covers multi- assets and trade types ( e.g. cash equity, equity options, government bonds etc)",
//         "Covers use cases for Valuation/Price, Portfolio Market Risk, Strategy Scenario Analytics",
//         "Covers use cases for Valuation/Price, Portfolio Market Risk, Strategy Scenario Analytics",
//         "Easily integrated with Industry standard market data",
//       ],
//       proThirdHeading: "Asset Manager",
//       proThirdPera:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, esse laboriosam quaerat quidem consequatur quas totam earum beatae cupiditate doloribus.",
//       proThirdImage: "product1.jpg",
//       proThirdAccordia: [
//         {
//           title: "Asset Owner",
//           desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque nisi voluptatum labore iusto est commodi cupiditate omnis laboriosam eligendi corporis! Lorem",
//         },
//         {
//           title: "Asset Owner",
//           desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque nisi voluptatum labore iusto est commodi cupiditate omnis laboriosam eligendi corporis! Lorem",
//         },
//         {
//           title: "Asset Owner",
//           desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque nisi voluptatum labore iusto est commodi cupiditate omnis laboriosam eligendi corporis! Lorem",
//         },
//       ],
//       proFourthCards1img: "product-feature-1.svg",
//       proFourthCards1title: "Risk Attribution",
//       proFourthCards1desc:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum",
//       proFourthCards2img: "product-feature-3.svg",
//       proFourthCards2title: "Risk Attribution",
//       proFourthCards2desc:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum",
//       proFourthCards3img: "product-feature-2.svg",
//       proFourthCards3title: "Risk Attribution",
//       proFourthCards3desc:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum",
//     });

//     const response = await product.save();

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
