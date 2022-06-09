const router = require("express").Router();
const HomeProductList = require("../Models/HomeProductList");
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

// <<<<<<<<<<<<<----------Create HomeProductList------------>>>>>>>>>>>>>>>>

router.post("/", upload.single("img"), async (req, res) => {
  const newHomeProductList = new HomeProductList({
    title: req.body.title,
    img: req.file.originalname,
  });
  try {
    const save = await newHomeProductList.save();
    res.status(200).json("Blog added successfully");
  } catch (err) {
    res.send(500).json(err);
  }
});

// <<<<<<<<<<<<<----------Get HomeProductList------------>>>>>>>>>>>>>>>>

router.get("/", async (req, res) => {
  try {
    const response = await HomeProductList.find();

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Get Single HomeProductList------------>>>>>>>>>>>>>>>>

router.get("/:id", async (req, res) => {
  try {
    const response = await HomeProductList.findById(req.params.id);

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Update Blog------------>>>>>>>>>>>>>>>>

router.put("/:id", upload.single("img"), async (req, res) => {
  const { title, img, imgFilename } = req.body;

  let img1 = "";

  try {
    img ? (img1 = img) : (img1 = imgFilename);

    const update = {
      title: title,
      img: img1,
    };

    const updatedblog = await HomeProductList.findByIdAndUpdate(
      req.params.id,
      update
    );
    res.status(200).json(updatedblog);
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Delete Blog------------>>>>>>>>>>>>>>>>

router.delete("/:id", async (req, res) => {
  try {
    const newHomeProductList = await HomeProductList.findById(req.params.id);

    const response = await newHomeProductList.delete();

    if (response) {
      res.status(200).send("has been successfully deleted");
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
