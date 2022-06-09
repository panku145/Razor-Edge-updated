const router = require("express").Router();
const CaseStudies = require("../Models/CaseStudies");
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

// <<<<<<<<<<<<<----------Create CaseStudies------------>>>>>>>>>>>>>>>>

// router.post("/", async (req, res) => {
//   const newCaseStudies = new CaseStudies(req.body);  
//   try{
//     const saveStudies = await newCaseStudies.save();
//     res.status(200).json('Blog added successfully');
//   }catch(err){
//     res.send(500).json(err);
//   }
// });

router.post("/", upload.single("img"), async (req, res) => {
  const newCaseStudies = new CaseStudies({
    title: req.body.title,
    desc: req.body.desc,
    img: req.file.originalname,
  });
  try {
    const saveCase = await newCaseStudies.save();
    res.status(200).json("Blog added successfully");
  } catch (err) {
    res.send(500).json(err);
  }
});

// <<<<<<<<<<<<<----------Get CaseStudies------------>>>>>>>>>>>>>>>>

router.get("/", async (req, res) => {
  try {
    const response = await CaseStudies.find();

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Get Single CaseStudies------------>>>>>>>>>>>>>>>>

router.get("/:id", async (req, res) => {
  try {
    const response = await CaseStudies.findById(req.params.id);

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Update CaseStudies------------>>>>>>>>>>>>>>>>

// router.put("/:id", async (req, res) => {
//   try {
//     const updatedcaseStudies = await CaseStudies.findByIdAndUpdate(req.params.id,{
//       $set: req.body
//     },
//       { new: true }
//     );
//     res.status(200).json(updatedcaseStudies) 
//   }catch(err){
//     console.log(err);
//   }
// });

// module.exports = router;

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

    const updatedcaseStudies = await CaseStudies.findByIdAndUpdate(
      req.params.id,
      update
    );
    res.status(200).json(updatedcaseStudies);
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Delete CaseStudies------------>>>>>>>>>>>>>>>>

router.delete("/:id", async (req, res) => {
  try {
    const caseStudies = await CaseStudies.findById(req.params.id);

    const response = await caseStudies.delete();

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