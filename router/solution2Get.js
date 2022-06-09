const router = require("express").Router();
const Solution2 = require("../Models/Solution2");

// <<<<<<<<<<<<<----------Get All Page Name------------>>>>>>>>>>>>>>>>

router.get("/", async (req, res) => {
  try {
    const response = await Solution2.find(
      {},
      {
        pageName: 1, _id: 0,
        pageDesc: 1, _id: 0,
      }
    );

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" }); 
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Get All Solution Page------------>>>>>>>>>>>>>>>>

router.get("/get-all", async (req, res) => {
  try {
    const response = await Solution2.find({ pageName: "Asset Manager" });

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" }); 
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Get Single Solution Page By Name------------>>>>>>>>>>>>>>>>

router.get("/:id", async (req, res) => { 
  try {
    const response = await Solution2.findOne({
      pageName: req.params.id.replace(/-/g, " "),
    });

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" }); 
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
