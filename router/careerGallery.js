const router = require("express").Router();
const CareerGallery = require("../Models/CareerGallery");
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

// <<<<<<<<<<<<<----------Create Gallery------------>>>>>>>>>>>>>>>>

// router.use("/", async (req, res) => {
//     const newCareerGallery = new CareerGallery({
//       img: 'teatimonial-1.png',
//     });
//     try {
//       const save = await newCareerGallery.save();
//       res.status(200).json("Blog added successfully");
//     } catch (err) {
//       res.send(500).json(err);
//     }
//   });

router.post("/", upload.single("img"), async (req, res) => {
  const newCareerGallery = new CareerGallery({
    img: req.file.originalname,
  });
  try {
    const save = await newCareerGallery.save();
    res.status(200).json("Blog added successfully");
  } catch (err) {
    res.send(500).json(err);
  }
});

// <<<<<<<<<<<<<----------Get Gallery------------>>>>>>>>>>>>>>>>

router.get("/", async (req, res) => {
  try {
    const response = await CareerGallery.find();

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });  
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Get Single Gallery------------>>>>>>>>>>>>>>>>

router.get("/:id", async (req, res) => {
  try {
    const response = await CareerGallery.findById(req.params.id);

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Update Gallery------------>>>>>>>>>>>>>>>>

router.put("/:id", upload.single("img"), async (req, res) => {
  // console.log(req.body);
  const {img, imgFilename } = req.body;

  let img1 = "";

  try {

    img ? (img1 = img) : (img1 = imgFilename); 

    const update = {
      img: img1,
    };

    const response = await CareerGallery.findByIdAndUpdate(req.params.id, update);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Delete Gallery------------>>>>>>>>>>>>>>>>

router.delete("/:id", async (req, res) => {
  try {
    const careerGallery = await CareerGallery.findById(req.params.id);

    const response = await careerGallery.delete();

    if (response) {
      res.status(200).send("successfully deleted");
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
