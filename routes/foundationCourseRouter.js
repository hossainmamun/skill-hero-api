const express = require("express");
const {
  createFoundationCourse,
  getCourseList,
  getSingleCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/foundationCourseController.js");
const validation = require("../middlewares/validationMiddleware.js");
const {
  foundationCourseValidation,
} = require("../validation/schemaValidation.js");
const foundationRouter = express();

// post foundation course
foundationRouter.post(
  "/",
  validation(foundationCourseValidation),
  createFoundationCourse
);

// get foundation course
foundationRouter.get("/", getCourseList);

// get single foundation course
foundationRouter.get("/:id", getSingleCourse);

// update foundation
foundationRouter.patch("/:id", updateCourse);

// delete foundation
foundationRouter.delete("/:id", deleteCourse);

module.exports = foundationRouter;
