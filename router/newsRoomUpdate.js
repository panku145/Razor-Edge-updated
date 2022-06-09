const router = require("express").Router();
const NewsRoom = require("../Models/NewsRoom");

router.post("/", async (req, res) => {
  const filter = { _id: req.body._id };

  const { 
    newsfirstheading, 
    newsfirstsubheading, 
    newsfirstpera, 
    newssecondheading,
    newssecondbtntext,
    newssecondpera,
   } = req.body;

  try {
    const update = {
        newsFirstSection:{
            newsfirstheading:newsfirstheading,
            newsfirstsubheading:newsfirstsubheading,
            newsfirstpera:newsfirstpera,
        },
        newsSecondSection:{
            newssecondheading:newssecondheading,
            newssecondbtntext:newssecondbtntext,
            newssecondpera:newssecondpera,
        },
    }

    const response = await NewsRoom.findOneAndUpdate(filter, update);

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
