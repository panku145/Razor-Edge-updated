const router = require("express").Router();
const WREAccordian = require("../Models/WREAccordian");

// <<<<<<<<<<<<<----------CREATE PRODUCT ACCORDIAN------------>>>>>>>>>>>>>>>>

router.post("/", async (req, res) => {
  const wreAccordian = new WREAccordian(req.body);
  try{
    const response = await wreAccordian.save();
    res.status(200).json('added successfully');
  }catch(err){
    res.send(500).json(err);
  }
});

// <<<<<<<<<<<<<----------GET PRODUCT ACCORDIAN------------>>>>>>>>>>>>>>>>

router.get("/", async (req, res) => {
  try {
    const response = await WREAccordian.find();

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------GET SINGLE PRODUCT ACCORDIAN------------>>>>>>>>>>>>>>>>

router.get("/:id", async (req, res) => {
  try {
    const response = await WREAccordian.findById(req.params.id);

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------UPDATE PRODUCT ACCORDIAN------------>>>>>>>>>>>>>>>>

router.put("/:id", async (req, res) => {

  try {
    const productAccordian = await WREAccordian.findByIdAndUpdate(req.params.id,{
      $set: req.body
    },
      { new: true }
    );
    res.status(200).json(productAccordian) 
  }catch(err){
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------DELETE PRODUCT ACCORDIAN------------>>>>>>>>>>>>>>>>

router.delete("/:id", async (req, res) => {
  try {
    const wreAccordian = await WREAccordian.findById(req.params.id);

    const response = await wreAccordian.delete();

    if (response) {
      res.status(200).send('has been successfully deleted');
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
