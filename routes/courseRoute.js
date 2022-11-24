const express = require('express')
const { createCourse, getCourseList, singleCourse, updateCourse, deleteCourse } = require('../controllers/courseController')
const validation = require('../middlewares/validationMiddleware')
const { courseValidation } = require('../validation/schemaValidation')
const courseRouter = express.Router()

// post course
courseRouter.post('/', validation(courseValidation), createCourse);

// get course list
courseRouter.get("/", getCourseList)

// get single course
courseRouter.get("/:id", singleCourse);

// update course
courseRouter.patch("/:id", updateCourse);

// delete course
courseRouter.delete("/:id", deleteCourse);

module.exports = courseRouter