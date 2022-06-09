const router = require("express").Router();
const Disclaimer = require("../Models/Disclaimer"); 

// <<<<<<<<<<<<<----------Create disclaimer------------>>>>>>>>>>>>>>>>

// router.use("/", async (req, res) => {
//   const disclaimer = new Disclaimer({
//     title:'Privacy Policy',
//     desc: 'Dummy text',

//   });
//   try {
//     const save = await disclaimer.save();
//     res.status(200).json("Blog added successfully");
//   } catch (err) {
//     res.send(500).json(err);
//   }
// });

// <<<<<<<<<<<<<----------Get disclaimer------------>>>>>>>>>>>>>>>>  

router.get("/", async (req, res) => { 
  try {
    const response = await Disclaimer.find();

    if (response) {
      res.status(200).send(response);
    } else { 
      res.status(500).send({ error: "failed to get data" });  
    }
  } catch (err) {
    console.log(err); 
  }
});

// <<<<<<<<<<<<<----------Update disclaimer------------>>>>>>>>>>>>>>>>

router.put("/", async (req, res) => {
  const { title, desc } = req.body;

  const filter = { _id: req.body.id };

  try {

    const update = {
      title: title,
      desc: desc, 
    };

    const updated = await Disclaimer.findByIdAndUpdate(filter, update);
    res.status(200).json(updated);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
