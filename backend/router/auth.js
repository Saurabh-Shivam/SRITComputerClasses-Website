const express = require("express");
const router = express.Router();
// Importing the userSchema
const User = require("../model/userSchema");
// Adding Security to our Password importing bcrypt and JWT
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { json } = require("express");
// for validation
const { body, validationResult } = require("express-validator");
var fetchuser = require("../middleware/fetchuser");

// router.get("/", (req, res) => {
//   res.send("Hello I am home page");
// });

const JWT_SECRET = "Saurabhisagoodb$oy";

// ROUTE 1: Create a User using: POST "/api/auth/register". No login required
// Bcz here it will take some time for creating a new User in the database(as it is registering a new user) and then
// it will return us a response, so all of this process will take some time, that's why we have made this an async function
router.post(
  "/register",

  // Adding a validation layer
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],

  async (req, res) => {
    // req -> whatever we are sending to our server, eg, sending username,email,password,etc.
    // res -> giving the response like, user created successfully, account created,etc.

    let success = true; // This will check whether our signup was successful or a failure
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    try {
      // Check whether the user with this email exists already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          success,
          error: "Sorry a user with this email already exists",
        });
      }

      // Hashing and salting the password
      const salt = await bcrypt.genSalt(10);
      // here secPass -> secured Password
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      // Adding JWT token authentication
      const data = {
        user: {
          id: user.id,
        },
      };
      // here we don't need to await bcz sign() is synchronous function, we will directly get the data
      const authToken = jwt.sign(data, JWT_SECRET);
      // console.log(authToken);
      success = true;
      res.json({ success, authToken }); // bcz we are using ES6 we dont have to write res.json({authToken: authToken})

      // res.json(user);

      // catch errors
    } catch (error) {
      // For now using this but ideally we will have to send this to Logger or SQS
      console.error(error.message);
      res.send(500).send("Internal Server Error");
    }
  }
);

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post(
  "/login", // Adding a validation layer
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = true; // This will check whether our login was successful or a failure
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // destructuring to get email and password from req.body
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      // here we add await bcz compare() is an asyncronous function
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials",
        });
      }

      // data here is the user's data which we will send
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ success, authToken });
    } catch (error) {
      console.error(error.message);
      res.send(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3: Get logged-in User Details using: POST "/api/auth/getuser". Login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    // here we are not selecting password
    const user = await User.findById(userId).select("-password");
    // Sending response
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.send(500).send("Internal Server Error");
  }
});

module.exports = router;
