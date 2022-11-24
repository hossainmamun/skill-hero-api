const express = require("express");
const {
  createFoundationCourse,
} = require("../controllers/foundationCourseController.js");
const validation = require("../middlewares/validationMiddleware.js");
const {
  foundationCourseValidation,
} = require("../validation/schemaValidation.js");
const foundationCourseRouter = express.Router();

// post foundation course
foundationCourseRouter.post(
  "/",
  validation(foundationCourseValidation),
  createFoundationCourse
);

module.exports = foundationCourseRouter;
