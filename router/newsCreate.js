const router = require("express").Router();
const News = require("../Models/News");

router.use("/", async (req, res) => {
  try {
    const news = new News({
        title:'Lorem ipsum dolor sit amet, consectetur',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img:'../../images/newsroom/all-blog6.png',
    });

    const response = await news.save();

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
