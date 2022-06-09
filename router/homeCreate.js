const router = require("express").Router();
const Home = require("../Models/Home");

// router.use("/", async (req, res) => {
//   try {
//     const user = new Home({
//       heroSection: {
//         heroMainHeading:
//           "Enabling Money Managers make better investment decisions",
//         herofirstbtn: "Register",
//         herofirstbtnUrl: "https://razor.acstechnologies.net/",
//         herosecondbtn: "Discover More",
//         herosecondbtnUrl: "https://razor.acstechnologies.net/",
//         herovideoimage: "video.mp4",
//         herosubheading:
//           "ENABLING MONEY MANAGERS MAKE BETTER INVESTMENT DECISIONS",
//         heropera:
//           "Razor Edge through its Solutions and Products enables Asset & Money Managers make faster and better decisions",
//       },
//       bulletSection: {
//         bulletimage: "blog3.png",
//       },
//       ourSolutions: {
//         heading: "Our Solutions",
//         subheading: "What we offer",
//         solutionimage: "solution.png",
//         mainheading: "Innovation driven investment decision making platform",
//         pera: "Razor Edge through its Solutions and Products enables Asset & Money Managers make faster and better decisions",
//       },
//       OurProducts: {
//         heading: "Market Edge",
//         subheading: "Our Products",
//         mainimage: "blog2.png",
//       },
//     });

//     const response = await user.save();

//     if (response) {
//       res.status(200).send({ message: "Data save successfully" });
//     } else {
//       res.status(500).send({ error: "failed to save successfully" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

module.exports = router;
