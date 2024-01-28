const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

//1.Database string
const db = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

//2.Connecting database
mongoose
  .connect(db)
  .then(() => {
    console.log("Database Connection successful!");
  })
  .catch((err) => {
    console.log("error occured", err);
  });

const port = process.env.PORT || 8000;

//3.Starting the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
