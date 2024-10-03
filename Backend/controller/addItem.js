const mongoose = require("mongoose");

const addItems = async (req, res) => {
  const usersModel = mongoose.model("users");
  const {
    trackId,
    delivered,
    status,
    from,
    to,
    shipDate,
    service,
    specialHandling,
  } = req.body;
  await usersModel.create({
    trackId: trackId,
    delivered: delivered,
    status: status,
    from: from,
    to: to,
    shipDate: shipDate,
    service: service,
    specialHandling: specialHandling,
  });
  try {
    res.status(200).json({
      status: "Done",
    });
  } catch (error) {
    res.status(400).json({
      massage: " failed",
      status: error.massage,
    });
  }
};
module.exports = addItems;
