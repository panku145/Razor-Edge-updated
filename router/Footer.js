const router = require("express").Router();
const Footer = require("../Models/Footer");
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

// <<<<<<<<<<<<<----------Create Footer------------>>>>>>>>>>>>>>>>

// router.use("/", async (req, res) => {
//   const newFooter = new Footer({
//     img: "nav-logo.svg",
//     companyDesc:
//       "Razor Edge through its Solutions and Products enables Asset & Money Managers make faster and better decisions",
//     btnText: "REGISTER",
//     heading1: "Company",
//     page1: "Why Razor Edge",
//     page2: "Careers",
//     page3: "Newsroom",
//     page4: "Contact Us",
//     page4Url: "https://razor.acstechnologies.net/", 
//     heading2: "Insight",
//     page5: "Blogs",
//     page6: "Case Studies",
//     heading3: "Our Ecosystem",
//     page7: "Clients",
//     page8: "Partners",
//     heading4: "Offices",
//     address1title: "India",
//     address1desc:
//       "91 springboard Vikhroli, Godrej & Boyce Industry Estate, Vikhroli West, Mumbai, Maharashtra",
//     address2title: "United States",
//     address2desc: "335 Madison Ave, 25th floor New York, NY 10017",
//     email: "info@razoredgeanalytics.com",
//     heading5: "Hours:",
//     time: "10:00 am – 07:00 pm",
//     copyright: "Copyright © 2021 Razor Edge. All Rights Reserved",
//     facebookURL: "https://razor.acstechnologies.net/",
//     youtubeURL: "https://razor.acstechnologies.net/",
//     linkedinURL: "https://razor.acstechnologies.net/",
//     twitterURL: "https://razor.acstechnologies.net/",
//   });
//   try {
//     const save = await newFooter.save();
//     res.status(200).json("added successfully");
//   } catch (err) {
//     res.send(500).json(err);
//   }
// });

// <<<<<<<<<<<<<----------Get Footer------------>>>>>>>>>>>>>>>> 

router.get("/", async (req, res) => {
  try {
    const response = await Footer.find();

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    } 
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Update Footer------------>>>>>>>>>>>>>>>>

router.put("/:id", upload.single("img"), async (req, res) => {
    const {
      companyDesc,
      btnText,
      heading1,
      page1,
      page2,
      page3,
      page4,
      page4Url,
      heading2,
      page5,
      page6,
      heading3,
      page7,
      page8,
      heading4,
      address1title,
      address1desc,
      address2title,
      address2desc,
      email,
      heading5,
      time,
      img,
      imgFilename,
      copyright,
      facebookURL,
      youtubeURL,
      linkedinURL,
      twitterURL,
    } = req.body;

  let img1 = "";

  try {
    img ? (img1 = img) : (img1 = imgFilename); 

    const update = {
      img: img1,
      companyDesc: companyDesc,
      btnText: btnText,
      heading1: heading1,
      page1: page1,
      page2: page2,
      page3: page3,
      page4: page4,
      page4Url: page4Url,
      heading2: heading2,
      page5: page5,
      page6: page6,
      heading3: heading3,
      page7: page7,
      page8: page8,
      heading4: heading4,
      address1title: address1title,
      address1desc: address1desc,
      address2title: address2title,
      address2desc: address2desc,
      email: email,
      heading5: heading5,
      time: time,
      copyright: copyright,
      facebookURL: facebookURL,
      youtubeURL: youtubeURL,
      linkedinURL: linkedinURL,
      twitterURL: twitterURL,
    };

    const updatedblog = await Footer.findByIdAndUpdate(req.params.id, update);
    res.status(200).json(updatedblog);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
