const express = require("express");
const { userSignUp, userLogin } = require("../controllers/userController.js");
const validation = require("../middlewares/validationMiddleware.js");
const { signUpValidation, loginValidation } = require("../validation/schemaValidation.js");
const userRouter = express.Router();

// signup user
userRouter.post("/signup", validation(signUpValidation), userSignUp);

// login user
userRouter.post("/login", validation(loginValidation), userLogin);

module.exports = userRouter;