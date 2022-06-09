const router = require("express").Router();
const Testimonial = require("../Models/Testimonial");
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
  { name: "logo", maxCount: 10 },
  { name: "img", maxCount: 10 },
]);

// <<<<<<<<<<<<<----------Create TESTIMONIAL------------>>>>>>>>>>>>>>>>

router.post("/", uploadMultiple, async (req, res) => { 

  let img1 = "";
  let logo1 = "";
  let desc1 = "";

  try {

    const { img, imgFilename, logo, logoFilename, desc } = req.body;

    img ? (img1 = img) : (img1 = imgFilename);
    logo ? (logo1 = logo) : (logo1 = logoFilename);

    desc1 = desc; 

    const testimonial = new Testimonial({
      img: img1,
      logo: logo1,
      desc: desc1,
    });

    const save = await testimonial.save();
    res.status(200).json("added successfully");
  } catch (err) {
    res.send(500).json(err);
  }
});

// <<<<<<<<<<<<<----------Get TESTIMONIALs------------>>>>>>>>>>>>>>>>

router.get("/", async (req, res) => {
  try {
    const response = await Testimonial.find();

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Get Single TESTIMONIAL------------>>>>>>>>>>>>>>>>

router.get("/:id", async (req, res) => {
  try {
    const response = await Testimonial.findById(req.params.id);

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Update TESTIMONIAL------------>>>>>>>>>>>>>>>>

router.put("/:id", uploadMultiple, async (req, res) => {

  let img1 = '';
  let logo1 = '';
  let desc1 = '';

  try {
    
    const { img, imgFilename, logo, logoFilename, desc } = req.body;  

    img ? (img1 = img) : (img1 = imgFilename);
    logo ? (logo1 = logo) : (logo1 = logoFilename);

    desc1 = desc;

    const update = {
      img: img1,
      logo: logo1,
      desc: desc1,
    };

    const updated = await Testimonial.findByIdAndUpdate(req.params.id, update);
    res.status(200).json(updated);

  
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

// <<<<<<<<<<<<<----------DELETE TESTIMONIAL------------>>>>>>>>>>>>>>>>

router.delete("/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id); 

    const response = await testimonial.delete();

    if (response) {
      res.status(200).send('has been successfully deleted');
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

