const yup = require("yup");

// user signup validation
const signUpValidation = yup.object().shape({
  userName: yup.string().max(25).required(),
  mobileNumber: yup.string().min(11).max(11).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(16).required(),
});

// user login validation
const loginValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(16).required(),
});

// banner validation
const bannerValidation = yup.object().shape({
  bannerTitle: yup.string().required(),
  bannerSubTitle: yup.string().required(),
  bannerImage: yup.string().required(),
});

// popular course validation
const popularCourseValidation = yup.object().shape({
  coverImage: yup.string().required(),
  courseTitle: yup.string().required(),
  courseDetail: yup.string().required(),
  instructorImage: yup.string().required(),
  updateDate: yup.string().required(),
  coursePrice: yup.string().required(),
});

module.exports = {
  signUpValidation,
  loginValidation,
  bannerValidation,
  popularCourseValidation,
};
