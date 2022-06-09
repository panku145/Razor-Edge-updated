const router = require("express").Router();
const PartnerServices = require("../Models/PartnerServices");
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

// <<<<<<<<<<<<<----------Create Partners------------>>>>>>>>>>>>>>>>

// router.use("/", async (req, res) => {
//     try {
//         const partnersServices = new PartnerServices({
//           title: "Data",
//           desc: "In the world of financial advice, speed, clarity and foresight aren't just nice to have, they're a necessity.",
//           img: "teatimonial-1.png",
//         });

//         const response = await partnersServices.save();  

//         if (response) {
//             res.status(200).send({ message: "Data save successfully" });
//         } else {
//             res.status(500).send({ error: "failed to save successfully" });
//         }
//     } catch (err) {
//         console.log(err);
//     }
// });

// <<<<<<<<<<<<<----------Get Partners------------>>>>>>>>>>>>>>>>

router.get("/", async (req, res) => {
  try {
    const response = await PartnerServices.find();

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);  
  }
});

// <<<<<<<<<<<<<----------Get Single Partners------------>>>>>>>>>>>>>>>>

router.get("/:id", async (req, res) => {
  try {
    const response = await PartnerServices.findById(req.params.id);

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Update Partners------------>>>>>>>>>>>>>>>>

router.put("/:id", upload.single("img"), async (req, res) => {

  const { title, desc, img, imgFilename } = req.body;

  let img1 = "";

  try {

    img ? (img1 = img) : (img1 = imgFilename); 

    const update = {
      title: title,
      desc: desc,
      img: img1,
    };

    const updated = await PartnerServices.findByIdAndUpdate(
      req.params.id,
      update
    );
    res.status(200).json(updated);
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;
