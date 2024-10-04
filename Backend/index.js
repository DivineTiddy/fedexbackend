require("express-async-errors");

const express = require("express");
const cors = require("cors");
const errorHandler = require("./handlers/errorHandlers");
require("dotenv").config();
const app = express();
app.use(cors());
const port = 8000;
const mongoose = require("mongoose");
const userRoute = require("./route/users.routes");

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING, {})
  .then(() => {
    console.log("Mongoose Connect Successful");
  })
  .catch(() => {
    console.log(" Connection Failure");
  });
require("./models/usersModel");
app.use(express.json());
// End of all routes
app.use(errorHandler);
app.use("/api/users", userRoute);
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "failed",
    massage: "Not tiddy",
  });
});
app.listen(port, () => {
  console.log("server started successfully");
});
