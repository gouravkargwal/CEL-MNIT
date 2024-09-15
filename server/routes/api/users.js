const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

const router = express.Router();

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      res.status(404).json({ message: "Invalid Credentials" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.post("/signup", async (req, res) => {
  const { name, email, password, branch, batch, areaOfInterest } = req.body;
  console.log(req.body);
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(404).json({ message: "User already exist." });
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      name,
      email,
      password: hashedPassword,
      branch,
      batch,
      areaOfInterest,
    });
    const token = jwt.sign(
      { name: result.name, email: result.email, id: result._id },
      "test",
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ result: result, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
