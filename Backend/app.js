const express = require("express");
const userRouter = require("./Router/UserRouter");
const courseRouter = require("./Router/CourseRouter");
const errorController = require("./Controllers/ErrorController");
const app = express();

//1. body parser
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);

app.use(errorController);
module.exports = app;
