const router = require("express").Router();
const CaseStudies = require("../Models/CaseStudies");

router.use("/", async (req, res) => {
  try {
    const caseStudies = new CaseStudies({
        title:'Lorem ipsum dolor sit amet, consectetur',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img:'../../images/newsroom/all-blog3.png',
    });

    const response = await caseStudies.save();

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
