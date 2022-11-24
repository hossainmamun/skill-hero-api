require("dotenv").config();
const userSchema = require("../models/userModel.js");
const jwt = require("jsonwebtoken");

// create token
const createToken = (_id) => {
  const token = jwt.sign({ _id }, `${process.env.USER_SECRET_KEY}`, {
    expiresIn: "2d",
  });
  return token;
};

// user signup
const userSignUp = async (req, res) => {
  const { userName, mobileNumber, email, password, isAdmin } = req.body;

  try {
    const user = await userSchema.signup(
      userName,
      mobileNumber,
      email,
      password,
      isAdmin
    );
    const token = createToken(user._id);
    res.status(201).json({ userName, token, isAdmin });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// user login
const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userSchema.login(email, password);
    const token = createToken(user._id);
    const userName = user.userName;
    const isAdmin = user.isAdmin;
    res.status(200).json({ userName, token, isAdmin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  userSignUp,
  userLogin,
};
