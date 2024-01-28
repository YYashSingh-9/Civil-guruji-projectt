// const userRouter
const express = require("express");
const userController = require("../Controllers/UserController");
const userRouter = express.Router();

userRouter.route("/signup").post(userController.signupUser);

module.exports = userRouter;
