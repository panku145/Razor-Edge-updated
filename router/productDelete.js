const router = require("express").Router();
const Product = require("../Models/Product");

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    const response = await product.delete();

    if (response) {
      res.status(200).send("has been successfully deleted");
    } else {
      res.status(500).send({ error: "failed to get data" });
    }
  } catch (err) {
    console.log(err);
  }
  
  // console.log(req.body);
}); 

module.exports = router;
