const router = require("express").Router();
const Header = require("../Models/Header");
const authenticate = require("../middlewear/Authenticate");
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

// <<<<<<<<<<<<<----------Create Header------------>>>>>>>>>>>>>>>>

  // router.use("/", async (req, res) => {
  //   const newHeader = new Header({
  //     logo: "nav-logo.svg",
  //     home: "Home",
  //     whyrazoredge: "WHY RAZOR EDGE",
  //     platform: "PLATFORM",
  //     solution: "SOLUTION",
  //     clients: "CLIENTS",
  //     career: "CAREER",
  //     register: "REGISTER",
  //     registerUrl: "https://razor.acstechnologies.net/",
  //     signin: "SIGN-IN",
  //     signinUrl: "https://razor.acstechnologies.net/",
  //   });
  //   try {
  //     const saveHeader = await newHeader.save();
  //     res.status(200).json("Blog added successfully");
  //   } catch (err) {
  //     res.send(500).json(err);
  //   }
  // });

  router.post("/", upload.single("img"), async (req, res) => {
    const newHeader = new Header({
      logo: req.file.originalname,
      home: req.body.home,
      whyrazoredge: req.body.whyrazoredge,
      platform: req.body.platform,
      solution: req.body.solution,
      clients: req.body.clients,
      career: req.body.career,
      register: req.body.register,
      registerUrl: req.body.registerUrl,
      signin: req.body.signin,
      signinUrl: req.body.signinUrl,
    });
    try {
      const saveHeader = await newHeader.save();
      res.status(200).json("added successfully");
    } catch (err) {
      res.send(500).json(err);
    }
  });

// <<<<<<<<<<<<<----------Get Header------------>>>>>>>>>>>>>>>>

router.get("/" , async (req, res) => {
  try {
    const response = await Header.find();

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });    
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Get Header by id------------>>>>>>>>>>>>>>>>

router.get("/:id", async (req, res) => {
  try {
    const response = await Header.findById(req.params.id);

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Update Header------------>>>>>>>>>>>>>>>>

router.put("/", upload.single("img"), async (req, res) => {

  const filter = { _id: req.body.id };
  // console.log(req.body);

  let img1 = "";

  try {

    const {
      home,
      whyrazoredge,
      platform,
      solution,
      clients,
      career,
      register,
      registerUrl,
      signin,
      signinUrl,
      img,
      imgFilename,
    } = req.body;

    img ? (img1 = img) : (img1 = imgFilename);  

    const update = {
      home: home,
      whyrazoredge: whyrazoredge,
      platform: platform,
      solution: solution, 
      clients: clients,
      career: career,
      register: register,
      registerUrl: registerUrl,
      signin: signin,
      signinUrl: signinUrl,
      logo: img1,
    };

    const updated = await Header.findByIdAndUpdate(filter, update); 
    res.status(200).json(updated);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
