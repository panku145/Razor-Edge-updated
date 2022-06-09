const router = require("express").Router();
const Partners = require("../Models/Partners");

// router.use("/", async (req, res) => {
//     try {
//         const partners = new Partners({
//           heading:
//             "We're proud to be working with innovative and thoughtful leaders like you",
//           subheading: "OUR PATNERS",
//           desc: "In the world of financial advice, speed, clarity and foresight aren't just nice to have, they're a necessity. Yet tools are insufficient: wealth management firms need more productivity, scale and reach to remain competitive. And client expectations are rising, as people demand more genuine, more human relationships from those they do business with. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempo",
//         });

//         const response = await partners.save();

//         if (response) {
//             res.status(200).send({ message: "Data save successfully" });
//         } else {
//             res.status(500).send({ error: "failed to save successfully" });
//         }
//     } catch (err) {
//         console.log(err);
//     }
// });

// <<<<<<<<<<<<<----------Get Partners------------>>>>>>>>>>>>>>>>

router.get("/", async (req, res) => {
  try {
    const response = await Partners.find();

    if (response) {
      res.status(200).send(response); 
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Update Partners------------>>>>>>>>>>>>>>>>

router.put("/", async (req, res) => {
  const filter = { _id: req.body._id };

  const {
    heading,
    subheading,
    desc,
  } = req.body;

  try {
    const update = {
      heading: heading,
      subheading: subheading,
      desc: desc,
    };

    const response = await Partners.findOneAndUpdate(filter, update);  

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
