const router = require("express").Router();
const BlogHeader = require("../Models/BlogHeader");

router.use("/", async (req, res) => {
  try {
    const blogHeader = new BlogHeader({
        heading:'Make Better Investment Decisions',
        subheading:'BLOGS',
        pera:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    });

    const response = await blogHeader.save();

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
