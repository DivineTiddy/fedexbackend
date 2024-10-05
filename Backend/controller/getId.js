const mongoose = require("mongoose");

const getId = async (req, res, next) => {
  try {
    const usersModel = mongoose.model("users");
    const data = await usersModel.findOne({ trackId: trackId });
    if (data) {
      res.status(200).json({
        status: true,
        result: {
          data,
        },
      });
    }else{
      throw "invalid track"
    }
  } catch (error) {
    res.status(400).json({
      massage: " failed",
      status: error.massage,
    });
  }
};
module.exports = getId;
