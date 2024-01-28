const UserModel = require("../Models/UserModel");
const CatchAsync = require("../Utils/CatchAsync");

exports.signupUser = CatchAsync(async (req, res, next) => {
  const user = await UserModel.create(req.body);
  console.log(user);
  res.status(200).json({
    status: "Success",
    user: user,
  });
});
