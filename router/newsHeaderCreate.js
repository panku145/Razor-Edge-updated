const router = require("express").Router();
const NewsHeader = require("../Models/NewsHeader");

router.use("/", async (req, res) => {
  try {
    const newsHeader = new NewsHeader({
        heading:'Make Better Investment Decisions2',
        subheading:'NEWSROOM',
        pera:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    });

    const response = await newsHeader.save();

    if (response) {
      res.status(200).send({ message: "Data save successfully" });
    } else {
      res.status(500).send({ error: "failed to save successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
