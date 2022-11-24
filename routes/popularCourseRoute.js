const express = require("express");
const {
  createPopularCourse,
  getPopularList,
  singlePopularCourse,
  updatePopularCourse,
  deletePopularCourse,
} = require("../controllers/popularCourseController");
const validation = require("../middlewares/validationMiddleware");
const { popularCourseValidation } = require("../validation/schemaValidation");
const popularCourseRouter = express.Router();

// post course
popularCourseRouter.post(
  "/",
  validation(popularCourseValidation),
  createPopularCourse
);

// get course
popularCourseRouter.get("/", getPopularList);

// get single course
popularCourseRouter.get("/:id", singlePopularCourse);

// update course
popularCourseRouter.patch("/:id", updatePopularCourse);

// delete course
popularCourseRouter.delete("/:id", deletePopularCourse);

module.exports = popularCourseRouter;
