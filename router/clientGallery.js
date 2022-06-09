const router = require("express").Router();
const ClientGallery = require("../Models/ClientGallery");
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

// <<<<<<<<<<<<<----------Create Client Gallery------------>>>>>>>>>>>>>>>>

router.post("/", upload.single("img"), async (req, res) => {
  const newClientImage = new ClientGallery({
    heading: req.body.heading,
    desc: req.body.desc,
    img: req.file.originalname,
  });
  try {
    const saveClientImage = await newClientImage.save();
    res.status(200).json("Gallery added successfully");
  } catch (err) {
    res.send(500).json(err);
  }
});

  // <<<<<<<<<<<<<<<<<<<<<---------------------Get Client Gallery---------------------->>>>>>>>>>>>>>>>>>>>>>

  router.get("/", async (req, res) => {
    try {
      const response = await ClientGallery.find();  

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
    const response = await ClientGallery.findById(req.params.id);

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

//   // <<<<<<<<<<<<<<<<<<<<<---------------------Update---------------------->>>>>>>>>>>>>>>>>>>>>>

router.put("/:id", upload.single("img"), async (req, res) => {  
    const { heading, img, desc, imgFilename } = req.body;
 
    let img1 = "";
    
    try {
        
        img ? (img1 = img) : (img1 = imgFilename);   
        
      const update = {
        heading: heading,
        desc: desc,
        img: img1,
      };

      const updatedblog = await ClientGallery.findByIdAndUpdate(
        req.params.id,
        update
      );
        res.status(200).json(updatedblog);
        
    } catch (err) {
      console.log(err);
    }
  });

  // <<<<<<<<<<<<<----------Delete Gallery------------>>>>>>>>>>>>>>>>

router.delete("/:id", async (req, res) => {
  try {
    const gallery = await ClientGallery.findById(req.params.id);

    const response = await gallery.delete();

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
