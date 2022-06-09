const router = require("express").Router();
const PrivacyPolicy = require("../Models/PrivacyPolicy"); 

// <<<<<<<<<<<<<----------Create privacyPolicy------------>>>>>>>>>>>>>>>>

// router.use("/", async (req, res) => {
//   const privacyPolicy = new PrivacyPolicy({
//     title:'Privacy Policy',
    // desc: 'Dummy text',

//   });
//   try {
//     const save = await privacyPolicy.save();
//     res.status(200).json("Blog added successfully");
//   } catch (err) {
//     res.send(500).json(err);
//   }
// });

// <<<<<<<<<<<<<----------Get privacyPolicy------------>>>>>>>>>>>>>>>>  

router.get("/", async (req, res) => { 
  try {
    const response = await PrivacyPolicy.find();

    if (response) {
      res.status(200).send(response);
    } else { 
      res.status(500).send({ error: "failed to get data" });  
    }
  } catch (err) {
    console.log(err); 
  }
});

// <<<<<<<<<<<<<----------Update privacyPolicy------------>>>>>>>>>>>>>>>>

router.put("/", async (req, res) => {
  const { title, desc } = req.body;

  const filter = { _id: req.body.id };

  try {

    const update = {
      title: title,
      desc: desc, 
    };

    const updated = await PrivacyPolicy.findByIdAndUpdate(filter, update);
    res.status(200).json(updated);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
