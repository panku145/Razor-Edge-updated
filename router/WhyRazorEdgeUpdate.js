const router = require("express").Router();
const multer = require("multer");
const WhyRazorEdge = require("../Models/WhyRazorEdge");

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
    { name: "WRESec1image", maxCount: 10 },
    { name: "WRESec2leftimg", maxCount: 10 },
    { name: "WRESec2rightimg", maxCount: 10 },
    { name: "WRESec3SliderImage", maxCount: 10 },
  ]);

  // <<<<<<<<<<<<<----------Update product Page------------>>>>>>>>>>>>>>>>

router.put("/", uploadMultiple, async (req, res) => { 

  // console.log(req.data);

    const filter = { _id: req.body.id };
  
    let WRESec1image1 = "";
    let WRESec2leftimg1 = "";
    let WRESec2rightimg1 = "";
    let WRESec3SliderImage1 = "";
  
    try {
  
      const {
        WRESec1heading,
        WRESec1subheading,
        WRESec1image,
        WRESec2pera,
        WRESec2heading,
        WRESec2leftimg,
        WRESec2rightimg,
        WRESec3heading,
        WRESec3SliderHeading,
        WRESec3SliderImage,
        WRESec3SliderPera1,
        WRESec3SliderPera2,
        WRESec4Part1pera,
        WRESec4Part2pera,
        WRESec4Part3pera,
        WRESec5Subheading,
        WRESec5btntxt,
        WRESec5heading,
        WRESec1imageFilename,
        WRESec2leftimgFilename,
        WRESec2rightimgFilename,
        WRESec3SliderImageFilename,
      } = req.body;
  
      WRESec1image
        ? (WRESec1image1 = WRESec1image)
        : (WRESec1image1 = WRESec1imageFilename);   
      WRESec2leftimg
        ? (WRESec2leftimg1 = WRESec2leftimg)
        : (WRESec2leftimg1 = WRESec2leftimgFilename);
      WRESec2rightimg
        ? (WRESec2rightimg1 = WRESec2rightimg)
        : (WRESec2rightimg1 = WRESec2rightimgFilename);
      WRESec3SliderImage
        ? (WRESec3SliderImage1 = WRESec3SliderImage)
        : (WRESec3SliderImage1 = WRESec3SliderImageFilename); 
  
      const update = {
        whyRazorEdgeFirstSection: {
            WRESec1heading: WRESec1heading,
            WRESec1subheading: WRESec1subheading,
            WRESec1image: WRESec1image1,
          },
          whyRazorEdgeSecondSection: {
            WRESec2heading: WRESec2heading,
            WRESec2pera: WRESec2pera ,
            WRESec2leftimg: WRESec2leftimg1, 
            WRESec2rightimg: WRESec2rightimg1,
          },
          whyRazorEdgeThirdSection: {
            WRESec3heading: WRESec3heading,
            WRESec3SliderImage: WRESec3SliderImage1,
            WRESec3SliderPera1: WRESec3SliderPera1,
            WRESec3SliderHeading: WRESec3SliderHeading,
            WRESec3SliderPera2: WRESec3SliderPera2,
          },
          whyRazorEdgeFourthSection: {
            WRESec4Part1pera: WRESec4Part1pera,
            WRESec4Part2pera: WRESec4Part2pera,
            WRESec4Part3pera: WRESec4Part3pera,
          },
          whyRazorEdgeFifthSection: {
            WRESec5heading: WRESec5heading, 
            WRESec5Subheading: WRESec5Subheading,
            WRESec5btntxt: WRESec5btntxt,
          }
      };
  
      const response = await WhyRazorEdge.findOneAndUpdate(filter, update);
  
      if (response) {
        res.status(200).send(update);
      } else {
        res.status(500).json({ error: "failed to update successfully" });
      }
    } catch (err) {
      console.log(err);
    }
  });
  
  module.exports = router;
  