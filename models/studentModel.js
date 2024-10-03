const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter student name"],
  },
  rollNo: {
    type: String,
    required: [true, "Please enter roll number"],
    unique: true,
  },
  branch: {
    type: String,
    required: [true, "Please enter branch"],
  },
  degree: {
    type: String,
    required: [true, "Please enter degree"],
  },
  DOB: {
    type: Date,
    required: [true, "Please enter Date of Birth"],
  },
  gender: {
    type: String,
    required: [true, "Please select gender"],
  },
  currentYear: {
    type: Number,
    required: [true, "Please enter current year"],
  },
  CGPA: {
    type: Number,
    required: [true, "Please enter CGPA"],
  },
  SGPA: {
    type: Number,
    required: [true, "Please enter SGPA"],
  },
  passoutYear: {
    type: Number,
    required: [true, "Please enter passout year"],
  },
  contactNumber: {
    type: String,
    required: [true, "Please enter contact number"],
  },
});

module.exports = mongoose.model("Student", studentSchema);
