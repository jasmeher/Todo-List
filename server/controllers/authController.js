const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { uName, fName, lName, email, password } = req.body;

    if (!uName || !fName || !email || !password) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }

    const duplicate = await User.findOne({ uName });

    console.log(duplicate);

    if (duplicate) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const hashPass = await bcrypt.hash(password, 10);
    console.log(hashPass);
    const user = new User({
      uName,
      fName,
      lName,
      email,
      password: hashPass,
    });

    await user.save();

    if (user) {
      return res.status(201).json({ message: "User successfuly Created" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { uName, password } = req.body;

    if (!uName || !password) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }

    const user = await User.findOne({ uName });

    if (!user) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { id: user._id, userName: user.uName },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  register,
  login,
};
