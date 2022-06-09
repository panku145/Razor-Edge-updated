const router = require("express").Router();
const BlogPage = require("../Models/BlogPage");

router.use("/", async (req, res) => {
  try {
    const blogPage = new BlogPage({
        blogFirstSection:{
            blogfirstheading:'BLOGS',
            blogfirstsubheading:'Make Better Investment Decisions',
            blogfirstpera:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        blogSecondSection:{
            blogsecondheading:'Read Our Top Topics',
            blogsecondpera:'Connect Razor Edge to all the tools you need to run your business. We’ve pre-built many popular and useful integrations with market-leading applications to get you off to a running start. This helps you increase your productivity and get more out of your existing software.',
            blogsecondbtntext:'READ LATEST NEWS',
        },
    });

    const response = await blogPage.save();

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
