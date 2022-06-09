const router = require("express").Router();
const BlogPage = require("../Models/BlogPage");

router.post("/", async (req, res) => {
  const filter = { _id: req.body._id };

  const { 
    blogfirstheading, 
    blogfirstsubheading, 
    blogfirstpera,
    blogsecondheading,
    blogsecondbtntext,
    blogsecondpera,
   } = req.body;

  try {
    const update = {
        blogFirstSection:{
            blogfirstheading:blogfirstheading,
            blogfirstsubheading:blogfirstsubheading,
            blogfirstpera:blogfirstpera,
        },
        blogSecondSection:{
            blogsecondheading:blogsecondheading,
            blogsecondbtntext:blogsecondbtntext,
            blogsecondpera:blogsecondpera,
        },
    }

    const response = await BlogPage.findOneAndUpdate(filter, update);

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
