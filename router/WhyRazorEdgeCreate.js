const router = require("express").Router();
const WhyRazorEdge = require("../Models/WhyRazorEdge");

router.use("/", async (req, res) => {
  try {
    const user = new WhyRazorEdge({
      whyRazorEdgeFirstSection: {
        WRESec1heading: 'Enabling Money Managers make better investment decisions',
        WRESec1subheading: 'WHY RAZOR EDGE',
        WRESec1image: '../images/why-us/why-us.jpg'
      },
      whyRazorEdgeSecondSection: {
        WRESec2heading: 'The Problem',
        WRESec2pera: 'In the world of financial advice, speed, clarity and foresight aren’t just nice to have, they’re a necessity. Yet tools are insufficient: wealth management firms need more productivity, scale and reach to remain competitive. And client expectations are rising, as people demand more genuine, more human relationships from those they do business with.',
        WRESec2leftimg:'teatimonial-1.png', 
        WRESec2rightimg:'teatimonial-1.png',
      },
      whyRazorEdgeThirdSection: {
        WRESec3heading: 'Enabling Money Managers make better investment decisions',
        WRESec3SliderImage: '../images/Home/bullets-img.png',
        WRESec3SliderPera1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        WRESec3SliderHeading: 'Benefit',
        WRESec3SliderPera2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      },
      whyRazorEdgeFourthSection: {
        WRESec4Part1pera: 'Years Of Business',
        WRESec4Part2pera: 'Professionals',
        WRESec4Part3pera: 'Clientele',
      },
      whyRazorEdgeFifthSection: {
        WRESec5heading: 'We work with the best', 
        WRESec5Subheading: 'Tesimonials',
        WRESec5btntxt: 'READ CASE STUDIES',
      }
    });

    const response = await user.save();

    if (response) {
      res.status(200).send({ message: "Data save successfully" });
    } else {
      res.status(500).send({ error: "failed to save successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
