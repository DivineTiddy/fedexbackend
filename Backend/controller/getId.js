const mongoose = require("mongoose");

const getId = async (req, res, next) => {
  try {
    const usersModel = mongoose.model("users");
    const data = await usersModel.findOne(req.query);
    if (!data) throw "Couldn't find id";

    res.status(200).json({
      status: true,
      result: {
        data,
      },
    });
  } catch (error) {
    res.status(400).json({
      massage: " failed",
      status: error.massage,
    });
  }
};
module.exports = getId;
