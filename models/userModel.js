const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    mobileNumber: {
      type: String,
      unique: true,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      require: true,
    },
  },
  { timestamps: true }
);

// user static signup method
userSchema.statics.signup = async function (
  userName,
  mobileNumber,
  email,
  password,
  isAdmin
) {
  // check existing email
  const existEmail = await this.findOne({ email: email });
  if (existEmail) {
    throw new Error("Sorry Email already in used");
  }

  // password hashing
  const salt = await bcrypt.genSalt(10);
  const passHash = await bcrypt.hash(password, salt);

  const user = await this.create({
    userName,
    mobileNumber,
    email,
    password: passHash,
    isAdmin,
  });
  return user;
};

// user static login method
userSchema.statics.login = async function (email, password) {
  // check email is exist
  const user = await this.findOne({ email: email });

  if (!user) {
    throw new Error("Invalid Action");
  }

  // check password is valid
  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    throw new Error("Invalid Action");
  }

  return user;
};

module.exports = mongoose.model("user", userSchema);
