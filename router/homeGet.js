const router = require("express").Router();
const Home = require("../Models/Home");

router.get("/", async (req, res) => {
  try {
    const response = await Home.find({});

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
