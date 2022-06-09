const router = require("express").Router();
const OperationJobs = require("../Models/OperationJobs");

// <<<<<<<<<<<<<----------Create OperationJobs------------>>>>>>>>>>>>>>>>

router.post("/", async (req, res) => {
  const newOperationJobs = new OperationJobs({
    title: req.body.title,
    location: req.body.location,
  });
  try {
    const save = await newOperationJobs.save();
    res.status(200).json("added successfully");
  } catch (err) {
    res.send(500).json(err);
  }
});

// router.use("/", async (req, res) => {
//   const newOperationJobs = new OperationJobs({
//     title: "Full Stack Developer", 
//     location: "Mumbai, Maharashtra",
//   });
//   try {
//     const save = await newOperationJobs.save();
//     res.status(200).json("added successfully");
//   } catch (err) {
//     res.send(500).json(err);
//   }
// });

// <<<<<<<<<<<<<----------Get OperationJobs------------>>>>>>>>>>>>>>>>

router.get("/", async (req, res) => {
  try {
    const response = await OperationJobs.find();  

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Get Single OperationJobs------------>>>>>>>>>>>>>>>>

router.get("/:id", async (req, res) => {
  try {
    const response = await OperationJobs.findById(req.params.id);

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Update OperationJobs------------>>>>>>>>>>>>>>>>

router.put("/:id", async (req, res) => {
  try {
    const operationJobs = await OperationJobs.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(operationJobs);
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Delete OperationJobs------------>>>>>>>>>>>>>>>>

router.delete("/:id", async (req, res) => {
  try {
    const newOperationJobs = await OperationJobs.findById(req.params.id);

    const response = await newOperationJobs.delete();

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
