const router = require("express").Router();
const CaseHeader = require("../Models/CaseHeader");

router.get("/", async (req, res) => {
  try {
    const response = await CaseHeader.findById('61ef67d67e833130ebb49a76');

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.put("/", async (req, res) => {

  const filter = { _id: req.body.id };
  const { heading, pera, subheading} = req.body;
  try {

    const update = {
      heading,
      pera,
      subheading,
    }

    const updatedCaseHeader = await CaseHeader.findOneAndUpdate(filter, update);
    if (updatedCaseHeader) {
      res.status(200).send(update);
    } else {
      res.status(500).json({ error: "failed to update successfully" });
    }
  }catch(err){
    console.log(err);
  }
});

module.exports = router;
