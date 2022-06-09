const router = require("express").Router();
const Blog = require("../Models/Blog");
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

// <<<<<<<<<<<<<----------Create Blogs------------>>>>>>>>>>>>>>>>

router.post("/", upload.single("img"), async (req, res) => {
  const newBlog = new Blog({
    title: req.body.title,
    desc: req.body.desc,
    img: req.file.originalname,
  });
  try {
    const saveBlog = await newBlog.save();
    res.status(200).json("Blog added successfully");
  } catch (err) {
    res.send(500).json(err);
  }
});

// <<<<<<<<<<<<<----------Get Blogs------------>>>>>>>>>>>>>>>>

router.get("/", async (req, res) => {
  try {
    const response = await Blog.find();

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });  
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Get Single Blog------------>>>>>>>>>>>>>>>>

router.get("/:id", async (req, res) => {
  try {
    const response = await Blog.findById(req.params.id);

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
  const { title, desc, img, imgFilename } = req.body;

  let img1 = "";

  try {

    img ? (img1 = img) : (img1 = imgFilename); 

    const update = {
      title: title,
      desc: desc,
      img: img1,
    };

    const updatedblog = await Blog.findByIdAndUpdate(req.params.id, update);
    res.status(200).json(updatedblog);
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Delete Blog------------>>>>>>>>>>>>>>>>

router.delete("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    const response = await blog.delete(); 

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
