const router = require("express").Router();
const Product = require("../Models/Product");

// <<<<<<<<<<<<<----------Get all Product Page----------->>>>>>>>>>>>>>>>

// router.get("/", async (req, res) => {
//   try {
//     const response = await Product.find(); 

//     if (response) {
//       res.status(200).send(response);
//     } else {
//       res.status(500).send({ error: "failed to get data" });
//     }
//   } catch (err) {
//     console.log(err); 
//   }
// }); 

// <<<<<<<<<<<<<----------Get Single Product Page By Id------------>>>>>>>>>>>>>>>>

router.get("/:id", async (req, res) => {
  try {
    const response = await Product.findById(req.params.id); 
 
    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" }); 
    }
  } catch (err) {
    console.log(err); 
  }
});

// <<<<<<<<<<<<<----------Get Single Product Page By Name------------>>>>>>>>>>>>>>>>

router.get("/product/:id", async (req, res) => {  
  try {
    const response = await Product.findOne({
      pageName: req.params.id.replace(/-/g, " "), 
    });

    if (response) {
      res.status(200).send(response);
    } else {
      res.status(500).send({ error: "failed to get data" }); 
    }
  } catch (err) {
    console.log(err);
  }
});

// <<<<<<<<<<<<<----------Get All Page Name & Desc------------>>>>>>>>>>>>>>>> 

router.get("/", async (req, res) => { 
  try {
    const response = await Product.find(
      {},
      {
        pageName: 1,
        _id: 0,
        pageDesc: 1,
        _id: 0,
      }
    );

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