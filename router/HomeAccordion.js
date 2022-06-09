const router = require("express").Router();
const HomeAccordion = require("../Models/HomeAccordion");

// <<<<<<<<<<<<<----------CREATE PRODUCT ACCORDIAN------------>>>>>>>>>>>>>>>>

router.post("/", async (req, res) => {
  const homeaccordian = new HomeAccordion(req.body);
  try {
    const response = await homeaccordian.save();
    res.status(200).json("added successfully");
  } catch (err) {
    res.send(500).json(err);
  }
});

// <<<<<<<<<<<<<----------GET PRODUCT ACCORDIAN------------>>>>>>>>>>>>>>>>

router.get("/", async (req, res) => {
  try {
    const response = await HomeAccordion.find();

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
    const response = await HomeAccordion.findById(req.params.id);

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
    const homeAccordion = await HomeAccordion.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(homeAccordion);
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------DELETE PRODUCT ACCORDIAN------------>>>>>>>>>>>>>>>>

router.delete("/:id", async (req, res) => {
  try {
    const homeAccordion = await HomeAccordion.findById(req.params.id);

    const response = await homeAccordion.delete();

    if (response) {
      res.status(200).send("has been successfully deleted");
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
