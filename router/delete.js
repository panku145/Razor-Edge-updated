const router = require("express").Router();
const User = require("../Models/User");

router.post("/", async (req, res) => {
  const filter = { _id: req.body._id };

  try {

    const response = await User.deleteOne(filter);

    if (response) {
      res.status(200).send({ message: "Deleted successfully" });
    } else {
      res.status(500).send({ error: "Not deleted successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
