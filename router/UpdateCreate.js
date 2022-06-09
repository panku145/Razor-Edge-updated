const router = require("express").Router();
const Update = require("../Models/Update");

router.post("/", async (req, res) => {
  try {
    const update = new Update({
        Blog:{
            heading:'Read Our Top Topics',
            pera:'Connect Razor Edge to all the tools you need to run your business. We’ve pre-built many popular and useful integrations with market-leading applications to get you off to a running start. This helps you increase your productivity and get more out of your existing software.',
            btntext:'READ LATEST NEWS',
        },
        News:{
            heading:'Read Our Top Topics',
            pera:'Connect Razor Edge to all the tools you need to run your business. We’ve pre-built many popular and useful integrations with market-leading applications to get you off to a running start. This helps you increase your productivity and get more out of your existing software.',
            btntext:'READ LATEST BLOGS',
        },
        Case:{
            heading:'Read Our Top Topics',
            pera:'Connect Razor Edge to all the tools you need to run your business. We’ve pre-built many popular and useful integrations with market-leading applications to get you off to a running start. This helps you increase your productivity and get more out of your existing software.',
            btntext:'READ LATEST BLOGS',
        }
    });

    const response = await update.save();

    if (response) {
      res.status(200).send({ message: "Data save successfully" });
    } else {
      res.status(500).send({ error: "failed to save successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});


router.put("/", async (req, res) => {
  // const id = {_id : req.body.id};
  // const { heading, pera, btntext} = req.body;
  // try {
  //   const update = {
  //   Blog:{
  //       heading:heading,
  //       pera:pera,
  //       btntext:btntext,
  //   },
  //   News:{
  //     heading:heading,
  //     pera:pera,
  //     btntext:btntext,
  //   },
  //   Case:{
  //     heading:heading,
  //     pera:pera,
  //     btntext:btntext,
  //   }
  //   }
  //   const updatedblog = await Update.findByIdAndUpdate(id,update);
  //   res.status(200).json(updatedblog) 
  // }catch(err){
  //   console.log(err);
  // }
});

module.exports = router;
