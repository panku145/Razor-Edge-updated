const router = require("express").Router();
const NewsRoom = require("../Models/NewsRoom");

router.get("/", async (req, res) => {
  try {
    const response = await NewsRoom.find({});

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
