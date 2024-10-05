const mongoose = require("mongoose");

const getId = async (req, res) => {
  const usersModel = mongoose.model("users");

  try {
    const data = await usersModel.findById(req.params.id);
    res.status(200).json({
      status: "Done",
      result: data,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      result: error.message,
    });
  }
};
module.exports = getId;
