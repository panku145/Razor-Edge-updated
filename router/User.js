const router = require("express").Router();
const User = require("../Models/User");
const authenticate = require("../middlewear/Authenticate");
const bcrypt = require("bcryptjs");

// <<<<<<<<<<<<<----------Registration------------>>>>>>>>>>>>>>>>

router.post("/register", async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({ error: "please fill the data" });
    } else {
      const user = new User({ email, password, role });
      await user.save();
      res.status(201).json({ message: "added successfully" });
    }
  } catch (err) {
    res.send(500).json(err); 
  }
}); 

// <<<<<<<<<<<<<----------signin------------>>>>>>>>>>>>>>>>

router.post("/signin", async (req, res) => {
  // console.log(req.body);
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "please fill the data" });
    } else {
      const userlogin = await User.findOne({ email: email });
      if (userlogin) {
        const isMatch = await bcrypt.compare(password, userlogin.password);

        token = await userlogin.generateAutToken();
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: false,
        });

        if (!isMatch) {
          return res.status(400).json({ error: "invalid credientials" });
        } else {
          return res.status(200).json({ message: "user login successfully" });
        }
      } else {
        return res.status(400).json({ error: "invalid credientials" });
      }
    }
  } catch (err) {
    res.send(500).json(err);
  }
});

// <<<<<<<<<<<<<----------user Get------------>>>>>>>>>>>>>>>>

router.get("/data", authenticate, async (req, res) => {
  res.send(req.rootUser);
});

module.exports = router;
