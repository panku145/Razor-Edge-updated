const router = require("express").Router();
const WhyRazorEdge = require("../Models/WhyRazorEdge");

router.get("/", async (req, res) => {
  try {
    const response = await WhyRazorEdge.find({});

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
