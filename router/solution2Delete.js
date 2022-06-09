const router = require("express").Router();
const Solution2 = require("../Models/Solution2");

router.delete("/:id", async (req, res) => {
  try {
    const solution2 = await Solution2.findById(req.params.id);

    const response = await solution2.delete(); 

    if (response) {
      res.status(200).send("has been successfully deleted");
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
