const router = require("express").Router();
const CareerPage = require("../Models/CareerPage");
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

// <<<<<<<<<<<<<----------Create career------------>>>>>>>>>>>>>>>>

// router.use("/", async (req, res) => {
//     const newCareer = new CareerPage({  
//         Sec1:{
//             heading:'This Is Razor Edge',
//             subheading:'CAREERS',
//             btntxt:'EXPLORE JOBS',
//             img: 'teatimonial-1.png',
//         },
//         Sec2:{
//             heading:'The People Behind Razor Edge',
//             pera:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
//         },
//         Sec3:{
//             heading:'Perks of Being in the Company',
//             subheading:'BENEFITS',
//         },
//         Sec4:{
//             heading:'Open Positions',
//             subheading:'JOBS'
//         }
//     });
//     try {
//       const save = await newCareer.save();  
//       res.status(200).json("Blog added successfully");  
//     } catch (err) {
//       res.send(500).json(err);
//     }
//   });

// <<<<<<<<<<<<<----------Get career------------>>>>>>>>>>>>>>>>  

router.get("/", async (req, res) => { 
  try {
    const response = await CareerPage.find(); 

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });  
    }
  } catch (err) {
    console.log(err); 
  }
});

// <<<<<<<<<<<<<----------Update career------------>>>>>>>>>>>>>>>>

router.put("/", upload.single("img"), async (req, res) => { 

  // console.log(req.body);

  const filter = { _id: req.body.id };

  let img1 = "";

  try {

  const { 
    sec1heading, 
    sec1subheading, 
    img, 
    sec1btntxt, 
    sec2heading,
    sec2pera,
    sec3heading,
    sec3subheading,
    sec4heading,  
    sec4subheading, 
    imgFilename,
  } = req.body;

    img ? (img1 = img) : (img1 = imgFilename);

    const update = {
      Sec1: {
        heading: sec1heading,
        subheading: sec1subheading,
        btntxt: sec1btntxt,
        img: img1,
      },
      Sec2: {
        heading: sec2heading,
        pera: sec2pera,
      },
      Sec3: {
        heading: sec3heading,
        subheading: sec3subheading,
      },
      sec4: {
        heading: sec4heading,
        subheading: sec4subheading,
      }
    };

    const updated = await CareerPage.findByIdAndUpdate(filter, update);
    res.status(200).json(updated);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;