const mongoose = require("mongoose");

const foundationSchema = new mongoose.Schema(
  {
    courseImage: {
      type: String,
      require: true,
    },
    courseTitle: {
      type: String,
      require: true,
    },
    titleBangla: {
      type: String,
      require: true,
    },
    coursePrice: {
      type: String,
      require: true,
    },
    shortNote: {
      type: String,
      require: true,
    },
    courseDetail: {
      type: String,
      require: true,
    },
    instructorImage: {
      type: String,
      require: true,
    },
    instructorProfession: {
      type: String,
      require: true,
    },
    instructorDetail: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model('foundationCourse', foundationSchema)