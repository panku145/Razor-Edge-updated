 const router = require("express").Router();
const { text } = require("express");
 const Homebullet = require("../Models/homebullet");

 // <<<<<<<<<<<<<----------Create Homebullet------------>>>>>>>>>>>>>>>>

 router.post("/", async (req, res) => {
   const newhomebullet = new Homebullet({
     text: req.body.text,
   });
   try {
     const save = await newhomebullet.save();
     res.status(200).json("Blog added successfully");
   } catch (err) {
     res.send(500).json(err);
   }
 });


 // <<<<<<<<<<<<<----------Get Homebullet------------>>>>>>>>>>>>>>>>

 router.get("/", async (req, res) => {
   try {
     const response = await Homebullet.find();

     if (response) {
       res.status(200).send(response);
     } else {
       res.status(500).send({ error: "failed to get data" });
     }
   } catch (err) {
     console.log(err);
   }
 });

//  <<<<<<<<<<<<<----------Get Single Homebullet------------>>>>>>>>>>>>>>>>

 router.get("/:id", async (req, res) => {
   try {
     const response = await Homebullet.findById(req.params.id); 

     if (response) {
       res.status(200).send(response);
     } else {
       res.status(500).send({ error: "failed to get data" });
     }
   } catch (err) {
     console.log(err);
   }
 });

 // <<<<<<<<<<<<<----------Update Homebullet------------>>>>>>>>>>>>>>>>

router.put("/:id", async (req, res) => {
  
  
  const filter = { _id: req.params.id }; 

  const { text } = req.body;

  try {
    const update = { 
      text : text
    };

    const response = await Homebullet.findOneAndUpdate(filter, update);

    if (response) {
      res.status(200).send(update);
    } else {
      res.status(500).json({ error: "failed to update successfully" });
    }
  } catch (err) {
    console.log(err);
  }
 });

 // <<<<<<<<<<<<<----------Delete Homebullet------------>>>>>>>>>>>>>>>>

 router.delete("/:id", async (req, res) => {
   try {
     const homebullet = await Homebullet.findById(req.params.id);

     const response = await homebullet.delete();

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
