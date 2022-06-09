const router = require("express").Router();
const User = require("../Models/User");

router.post("/", async (req, res) => {
  const filter = { _id: req.body._id };

  const { name, age, city, country } = req.body;

  try {
    const update = {
      name: name,
      age: age,
      city: city,
      country: country,
    };

    const response = await User.findOneAndUpdate(filter, update);

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
