const router = require("express").Router();
const User = require("../Models/User");

router.post("/", async (req, res) => {
  const { name, age, city, country } = req.body;

  if (!name || !age || !city || !country) {
    return res.status(422).json({ error: "plz fill the field correctly." });
  } else {
    try {
      const user = new User({
        name: name,
        age: age,
        city: city,
        country: country,
      });

      const response = await user.save();

      if (response) {
        res.status(200).json({ message: "Data save successfully" });
      } else {
        res.status(500).json({ error: "failed to save successfully" });
      }
    } catch (err) {
      console.log(err);
    }
  }
});

module.exports = router;
