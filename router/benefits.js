const router = require("express").Router();
const Benefits = require("../Models/Benefits");
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

// <<<<<<<<<<<<<----------Create Benefits------------>>>>>>>>>>>>>>>>

// router.use("/", async (req, res) => {
//   const newBenefits = new Benefits({
//       title:'Career Growth',
//       desc:'Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua.',   
//       img:'teatimonial-1.png',
//     // title: req.body.title,
//     // desc: req.body.desc,
//     // img: req.file.originalname,
//   });
//   try {
//     const save = await newBenefits.save();
//     res.status(200).json("Blog added successfully");
//   } catch (err) {
//     res.send(500).json(err);
//   }
// });

// <<<<<<<<<<<<<----------Get Benefits------------>>>>>>>>>>>>>>>>

router.get("/", async (req, res) => {
  try {
    const response = await Benefits.find();

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });  
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Get Single Benefits------------>>>>>>>>>>>>>>>>

router.get("/:id", async (req, res) => {
  try {
    const response = await Benefits.findById(req.params.id);

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Update Benefits------------>>>>>>>>>>>>>>>>

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

    const updatedblog = await Benefits.findByIdAndUpdate(req.params.id, update);  
    res.status(200).json(updatedblog);
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Delete Benefits------------>>>>>>>>>>>>>>>>

router.delete("/:id", async (req, res) => {
  try {
    const benefits = await Benefits.findById(req.params.id);

    const response = await benefits.delete();

    if (response) {
      res.status(200).send("blog has been successfully deleted");
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
