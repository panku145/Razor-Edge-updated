const router = require("express").Router();
const BlogHeader = require("../Models/BlogHeader");

router.get("/", async (req, res) => {
  try {
    const response = await BlogHeader.findById('61eebfe3f88054ff605424d9');

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.put("/", async (req, res) => {

  const filter = { _id: req.body.id };
  const { heading, pera, subheading} = req.body;
  try {

    const update = {
      heading,
      pera,
      subheading,
    }

    const updatedBlogHeader = await BlogHeader.findOneAndUpdate(filter, update);
    if (updatedBlogHeader) {
      res.status(200).send(update);
    } else {
      res.status(500).json({ error: "failed to update successfully" });
    }
  }catch(err){
    console.log(err);
  }
});

module.exports = router;
