const popularCourseSchema = require("../models/popularCourseModel.js");

// create popular course
const createPopularCourse = async (req, res) => {
  const {
    coverImage,
    courseTitle,
    courseDetail,
    instructorImage,
    updateDate,
    coursePrice,
  } = req.body;

  try {
    const course = await popularCourseSchema.create({
      coverImage,
      courseTitle,
      courseDetail,
      instructorImage,
      updateDate,
      coursePrice,
    });
    res.status(201).json(course);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// get popular course list
const getPopularList = async (req, res) => {
  try {
    const course = await popularCourseSchema.find({});
    res.status(200).json(course);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// get single popular course
const singlePopularCourse = async (req, res) => {
  const id = req.params.id;
  try {
    const course = await popularCourseSchema.findById({ _id: id });
    res.status(200).json(course);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// update popular course
const updatePopularCourse = async (req, res) => {
  const id = req.params.id;
  const {
    coverImage,
    courseTitle,
    courseDetail,
    instructorImage,
    updateDate,
    coursePrice,
  } = req.body;

  try {
    const course = await popularCourseSchema.findByIdAndUpdate(
      { _id: id },
      {
        coverImage,
        courseTitle,
        courseDetail,
        instructorImage,
        updateDate,
        coursePrice,
      },
      { returnOriginal: false }
    );
    res.status(200).json(course);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// delete popular course
const deletePopularCourse = async (req, res) => {
  const id = req.params.id;

  try {
    const course = await popularCourseSchema.findByIdAndDelete({ _id: id });
    res.status(200).json(course);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = {
  createPopularCourse,
  getPopularList,
  singlePopularCourse,
  updatePopularCourse,
  deletePopularCourse,
};
