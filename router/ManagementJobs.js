const router = require("express").Router();
const ManagementJobs = require("../Models/ManagementJobs");

// <<<<<<<<<<<<<----------Create ManagementJobs------------>>>>>>>>>>>>>>>>

router.post("/", async (req, res) => {
  const newManagementJobs = new ManagementJobs({ 
    title: req.body.title,
    location: req.body.location,
  });
  try {
    const save = await newManagementJobs.save(); 
    res.status(200).json("added successfully");
  } catch (err) {
    res.send(500).json(err);
  }
});

// router.use("/", async (req, res) => {
//   const newManagementJobs = new ManagementJobs({
//     title: "Management Intern",
//     location: "Mumbai, Maharashtra",
//   });
//   try {
//     const save = await newManagementJobs.save();
//     res.status(200).json("Blog added successfully");
//   } catch (err) {
//     res.send(500).json(err);
//   }
// });

// <<<<<<<<<<<<<----------Get ManagementJobs------------>>>>>>>>>>>>>>>>

router.get("/", async (req, res) => {
  try {
    const response = await ManagementJobs.find(); 

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Get Single ManagementJobs------------>>>>>>>>>>>>>>>>

router.get("/:id", async (req, res) => {
  try {
    const response = await ManagementJobs.findById(req.params.id);

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Update ManagementJobs------------>>>>>>>>>>>>>>>>

router.put("/:id", async (req, res) => { 
  try {
    const managementJobs = await ManagementJobs.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(managementJobs);
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Delete ManagementJobs------------>>>>>>>>>>>>>>>>

router.delete("/:id", async (req, res) => {
  try {
    const newManagementJobs = await ManagementJobs.findById(req.params.id);

    const response = await newManagementJobs.delete();

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
