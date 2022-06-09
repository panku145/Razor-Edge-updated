const router = require("express").Router();
const NewsRoom = require("../Models/NewsRoom");

router.use("/", async (req, res) => {
  try {
    const newsroom = new NewsRoom({
        newsFirstSection:{
            newsfirstheading:'NEWSROOM',
            newsfirstsubheading:'MAKE BETTER INVESTMENT DECISIONS',
            newsfirstpera:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        newsSecondSection:{
            newssecondheading:'Read Our Top Topics',
            newssecondpera:'Connect Razor Edge to all the tools you need to run your business. We’ve pre-built many popular and useful integrations with market-leading applications to get you off to a running start. This helps you increase your productivity and get more out of your existing software.',
            newssecondbtntext:'READ LATEST BLOGS',
        },
    });

    const response = await newsroom.save();

    if (response) {
      res.status(200).send({ message: "Data save successfully" });
    } else {
      res.status(500).send({ error: "failed to save successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await NewsRoom.find({});

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
