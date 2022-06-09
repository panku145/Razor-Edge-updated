const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => {
    console.log("connetion successful");
  })
  .catch((err) => {
    console.log(err);
  });

  // useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifieldTopology: true,
//   useFiledAndModify: false,
