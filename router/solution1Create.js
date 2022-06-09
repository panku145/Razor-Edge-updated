const router = require("express").Router();
const Solution1 = require("../Models/Solution1");

router.use("/", async (req, res) => {
  // try {
  //   const solution1 = new Solution1({
  //     pageName: "Hedge Fund",
  //     pageDesc: "Lorem ipsum dolor sit amet consectetur",
  //     sol1ZeroImage: "../images/integration/data.jpg",
  //     sol1ZeroTitle: "Power all your operations",
  //     sol1ZeroSubtitle: "INTEGRATIONS",
  //     sol1ZeroPera:
  //       "Enhance the value of your Razor Edge platform by seamlessly integrating with your other tech.",
  //     sol1FirstImage: "../images/integration/data.jpg",
  //     sol1FirstHeading: "Data you can trust",
  //     sol1FirstPera:
  //       "Our direct data feeds aggregate all your portfolio, market and client data in a single place. We then verify and standardize it across liquid and illiquid assets. Having all this data in a common format allows you to conduct deep analysis and get actionable insights on every type of asset class in a portfolio.",
  //     sol1SecondHeading: "Unlock the value of your data",
  //     sol1SecondPera:
  //       "Our APIs ensure that this higher quality data flows across systems, so you can efficiently automate workflows and power your business-critical applications. With Addepar as the hub for your operations, you have a consolidated, “go-to” place for critical information, eliminating the need for duplicative data entry and system cross-checks.",
  //     sol1ThirdMainHeading: "Get more out of your data",
  //     sol1Thirdcard1Image: "../images/integration/connect.svg",
  //     sol1Thirdcard1Text: "Connect All Of Your Systems & Workflows",
  //     sol1Thirdcard2Image: "../images/integration/spend.svg",
  //     sol1Thirdcard2Text: "Spend Less Time Toggling Between Systems",
  //     sol1Thirdcard3Image: "../images/integration/use.svg",
  //     sol1Thirdcard3Text: "Use Razor Edge Data To Feed All Your Operations",
  //     sol1Thirdcard4Image: "../images/integration/use.svg",
  //     sol1Thirdcard4Text: "Meet Current And Future Regulatory Requirements With Ease",
  //     sol1FourthImage: "../images/integration/bullets-img.png",
  //     sol1FourthHeading: "Connect with the tools you use every day",
  //     sol1FourthPera:
  //       "Connect Razor Egde to all the tools you need to run your business. We’ve pre-built many popular and useful integrations with market-leading applications to get you off to a running start. This helps you increase your productivity and get more out of your existing software.",
  //     sol1FifthBtnText: "DEVELOPER PORTAL",
  //     sol1FifthImage: "../images/integration/resources.jpg",
  //     sol1FifthHeading: "Resources to build what you need", 
  //     sol1FifthPera:
  //       "Whether you prefer to do it yourself or enlist the help of an approved partner, we have the resources to ensure that you get there. Powerful suite of APIs Intuitive developer resources Scalable and secure infrastructure Tour our Developer Portal to learn about our APIs, practice modeling requests and review best practices, so you can quickly launch new solutions., sol1FifthBtnText:",
  //   });

  //   const response = await solution1.save();

  //   if (response) {
  //     res.status(200).send({ message: "Data save successfully" });
  //   } else {
  //     res.status(500).send({ error: "failed to save successfully" });
  //   }
  // } catch (err) {
  //   console.log(err);
  // } 
});

module.exports = router;
