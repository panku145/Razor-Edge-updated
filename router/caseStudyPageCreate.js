const router = require("express").Router();
const CaseStudiesPage = require("../Models/CaseStudiesPage");

router.use("/", async (req, res) => {
  try {
    const caseStudyPage = new CaseStudiesPage({
        caseFirstSection:{
            casefirstheading:'Make Better Investment Decisions',
            casefirstsubheading:'CASE STUDIES',
            casefirstpera:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        caseSecondSection:{
            casesecondheading:'Read Our Top Topics',
            casesecondpera:'Connect Razor Edge to all the tools you need to run your business. We’ve pre-built many popular and useful integrations with market-leading applications to get you off to a running start. This helps you increase your productivity and get more out of your existing software.',
            casesecondbtntext:'READ LATEST BLOGS',
        },
    });

    const response = await caseStudyPage.save();

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
