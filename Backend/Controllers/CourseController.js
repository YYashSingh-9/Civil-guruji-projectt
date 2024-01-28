const CatchAsync = require("../Utils/CatchAsync");
const Course = require("../Models/CoursesModel");
const BoughtCourse = require("../Models/BoughtCourseModel");

exports.buyCourse = CatchAsync(async (req, res, next) => {
  const course = await BoughtCourse.create(req.body);
  console.log(course);
  res.status(200).json({
    status: "Success",
    data: course,
  });
});

exports.allCourse = CatchAsync(async (req, res, next) => {
  const allCourses = await Course.find();
  res.status(200).json({
    status: "Successful",
    data: allCourses,
  });
});

exports.oneCourse = CatchAsync(async (req, res, next) => {
  const onecourseData = await Course.findById(req.params.id);
  res.status(200).json({
    status: "Success",
    data: onecourseData,
  });
});
