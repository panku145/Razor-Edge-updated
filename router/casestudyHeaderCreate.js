const router = require("express").Router();
const CaseHeader = require("../Models/CaseHeader");

router.use("/", async (req, res) => {
  try {
    const caseHeader = new CaseHeader({
        heading:'Make Better Investment Decisions',
        subheading:'CASE STUDIES',
        pera:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor aliqua.',
    });

    const response = await caseHeader.save();

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
