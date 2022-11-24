const foundationCourseSchema = require("../controllers/foundationCourseController.js");

// create course
const createFoundationCourse = async (req, res) => {
  const {
    courseImage,
    courseTitle,
    titleBangla,
    coursePrice,
    shortNote,
    courseDetail,
    instructorImage,
    instructorProfession,
    instructorDetail,
  } = req.body;
  try {
    const course = await foundationCourseSchema.create({
      courseImage,
      courseTitle,
      titleBangla,
      coursePrice,
      shortNote,
      courseDetail,
      instructorImage,
      instructorProfession,
      instructorDetail,
    });
    res.status(201).json(course);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = {
  createFoundationCourse,
};
