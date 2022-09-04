const mongoose = require("mongoose");

// Creating Schema or say our document's structure
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  detail: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  //   photo: {
  //     type: String,
  //     required: false,
  //   },
  //   categories: {
  //     type: Array,
  //     required: false,
  //   },
});

// Compiling our Schema into model
const Course = mongoose.model("Course", courseSchema);

// Exporting our Course model
module.exports = Course;
