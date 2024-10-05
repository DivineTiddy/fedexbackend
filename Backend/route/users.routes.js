const express = require("express");
const getId = require("../controller/getId");
const addItems = require("../controller/addItem");

const userRoute = express.Router();

userRoute.get("/:id", getId);
userRoute.post("/add", addItems);

module.exports = userRoute;
