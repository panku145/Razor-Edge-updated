const router = require("express").Router();
const Solution1 = require("../Models/Solution1");

// <<<<<<<<<<<<<----------Get All Page Name------------>>>>>>>>>>>>>>>>

router.get("/", async (req, res) => {
  try {
    const response = await Solution1.find( 
      {},
      {
        pageName: 1,
        _id: 0,
        pageDesc: 1,
        _id: 0,
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

// <<<<<<<<<<<<<----------Get Single Solution1 Page By Name------------>>>>>>>>>>>>>>>> 

router.get("/:id", async (req, res) => {  

  try {
    const response = await Solution1.findOne({
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