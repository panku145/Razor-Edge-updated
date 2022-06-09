const router = require("express").Router();
const DevelopmentJobs = require("../Models/DevelopmentJobs");

// <<<<<<<<<<<<<----------Create DevelopmentJobs------------>>>>>>>>>>>>>>>>

router.post("/", async (req, res) => {
  const newDevelopmentJobs = new DevelopmentJobs({
    title: req.body.title,
    location: req.body.location,
  });
  try {
    const save = await newDevelopmentJobs.save();
    res.status(200).json("added successfully");
  } catch (err) {
    res.send(500).json(err);
  }
});

// router.use("/", async (req, res) => {
//   const newDevelopmentJobs = new DevelopmentJobs({ 
//     title: "Marketing Manager",
//     location: "Mumbai, Maharashtra",
//   });
//   try {
//     const save = await newDevelopmentJobs.save();
//     res.status(200).json("added successfully");
//   } catch (err) {
//     res.send(500).json(err);
//   }
// });

// <<<<<<<<<<<<<----------Get DevelopmentJobs------------>>>>>>>>>>>>>>>>

router.get("/", async (req, res) => {
  try {
    const response = await DevelopmentJobs.find();

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Get Single DevelopmentJobs------------>>>>>>>>>>>>>>>>

router.get("/:id", async (req, res) => {
  try {
    const response = await DevelopmentJobs.findById(req.params.id);

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Update DevelopmentJobs------------>>>>>>>>>>>>>>>>

router.put("/:id", async (req, res) => {
  try {
    const developmentJobs = await DevelopmentJobs.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(developmentJobs);
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Delete DevelopmentJobs------------>>>>>>>>>>>>>>>>
 
router.delete("/:id", async (req, res) => {
  try {
    const newDevelopmentJobs = await DevelopmentJobs.findById(req.params.id);

    const response = await newDevelopmentJobs.delete();

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
