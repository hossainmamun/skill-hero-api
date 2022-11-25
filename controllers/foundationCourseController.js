const foundationSchema = require("../models/foundationCourseModel.js");

// create course for foundation
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
    const course = await foundationSchema.create({
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

// get course list
const getCourseList = async (req, res) => {
  try {
    const course = await foundationSchema.find({});
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get single course
const getSingleCourse = async (req, res) => {
  const id = req.params.id;
  try {
    const course = await foundationSchema.findById({ _id: id });
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update course
const updateCourse = async (req, res) => {
  const id = req.params.id;
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
    const course = await foundationSchema.findByIdAndUpdate(
      { _id: id },
      {
        courseImage,
        courseTitle,
        titleBangla,
        coursePrice,
        shortNote,
        courseDetail,
        instructorImage,
        instructorProfession,
        instructorDetail,
      },
      { returnOriginal: false }
    );
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete course
const deleteCourse = async (req, res) => {
  const id = req.params.id;
  try {
    const course = await foundationSchema.findByIdAndDelete({ _id: id });
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createFoundationCourse,
  getCourseList,
  getSingleCourse,
  updateCourse,
  deleteCourse,
};
