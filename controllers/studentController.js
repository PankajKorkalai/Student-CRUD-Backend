const Student = require("../models/studentModel");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// Create new student
exports.createStudent = catchAsyncErrors(async (req, res, next) => {
  const { name, rollNo, branch, degree, DOB, gender, currentYear, CGPA, SGPA, passoutYear, contactNumber } = req.body;

  const student = await Student.create({
    name,
    rollNo,
    branch,
    degree,
    DOB,
    gender,
    currentYear,
    CGPA,
    SGPA,
    passoutYear,
    contactNumber,
  });

  res.status(201).json({
    success: true,
    student,
  });
});

// Get all students
exports.getAllStudents = catchAsyncErrors(async (req, res, next) => {
  const students = await Student.find();
  res.status(200).json({
    success: true,
    students,
  });
});

// Get student by ID
exports.getStudentById = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findById(req.params.id);

  if (!student) {
    return res.status(404).json({ success: false, message: "Student not found" });
  }

  res.status(200).json({
    success: true,
    student,
  });
});

// Update student
exports.updateStudent = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!student) {
    return res.status(404).json({ success: false, message: "Student not found" });
  }

  res.status(200).json({
    success: true,
    student,
  });
});

// Delete student
exports.deleteStudent = catchAsyncErrors(async (req, res, next) => {
  const student = await Student.findByIdAndDelete(req.params.id);

  if (!student) {
    return res.status(404).json({ success: false, message: "Student not found" });
  }

  res.status(200).json({
    success: true,
    message: "Student deleted successfully",
  });
});
