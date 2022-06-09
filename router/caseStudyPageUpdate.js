const router = require("express").Router();
const CaseStudiesPage = require("../Models/CaseStudiesPage");

router.post("/", async (req, res) => {
  const filter = { _id: req.body._id };

  const { 
    casefirstheading, 
    casefirstsubheading, 
    casefirstpera,
    casesecondheading,
    casesecondbtntext,
    casesecondpera,
   } = req.body;

  try {
    const update = {
        caseFirstSection:{
            casefirstheading:casefirstheading,
            casefirstsubheading:casefirstsubheading,
            casefirstpera:casefirstpera,
        },
        caseSecondSection:{
            casesecondheading:casesecondheading,
            casesecondbtntext:casesecondbtntext,
            casesecondpera:casesecondpera,
        },
    }

    const response = await CaseStudiesPage.findOneAndUpdate(filter, update);

    if (response) {
      res.status(200).send(update);
    } else {
      res.status(500).json({ error: "failed to update successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
