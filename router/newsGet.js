const router = require("express").Router();
const News = require("../Models/News");
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

// <<<<<<<<<<<<<----------Create News------------>>>>>>>>>>>>>>>>

// router.post("/", async (req, res) => {
//   const newNews = new News(req.body);
//   try{
//     const saveNews = await newNews.save();
//     res.status(200).json('Blog added successfully');
//   }catch(err){
//     res.send(500).json(err);
//   }
// });

router.post("/", upload.single("img"), async (req, res) => {
  const newNews = new News({
    title: req.body.title,
    desc: req.body.desc,
    img: req.file.originalname,  
  });
  try {
    const saveNews = await newNews.save();
    res.status(200).json("Blog added successfully");
  } catch (err) {
    res.send(500).json(err);
  }
});

// <<<<<<<<<<<<<----------Get News------------>>>>>>>>>>>>>>>>

router.get("/", async (req, res) => {
  try {
    const response = await News.find();

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Get Single New------------>>>>>>>>>>>>>>>>

router.get("/:id", async (req, res) => {
  try {
    const response = await News.findById(req.params.id);

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Update New------------>>>>>>>>>>>>>>>>

// router.put("/:id", async (req, res) => {
//   try {
//     const updatednews = await News.findByIdAndUpdate(req.params.id,{
//       $set: req.body
//     },
//       { new: true }
//     );
//     res.status(200).json(updatednews) 
//   }catch(err){
//     console.log(err);
//   }
// });

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

    const updatednews = await News.findByIdAndUpdate(req.params.id, update);
    res.status(200).json(updatednews);
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Delete News------------>>>>>>>>>>>>>>>>

router.delete("/:id", async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    const response = await news.delete();

    if (response) {
      res.status(200).send('blog has been successfully deleted');
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

