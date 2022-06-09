const router = require("express").Router();
const NewsHeader = require("../Models/NewsHeader");

router.get("/", async (req, res) => {
  try {
    const response = await NewsHeader.findById('61eeac6bdb685bce0ab2bf6f');

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

    const updatedNewsHeader = await NewsHeader.findOneAndUpdate(filter, update);
    if (updatedNewsHeader) {
      res.status(200).send(update);
    } else {
      res.status(500).json({ error: "failed to update successfully" });
    }
  }catch(err){
    console.log(err);
  }
});

module.exports = router;
