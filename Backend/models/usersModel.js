const { Mongoose, default: mongoose } = require("mongoose");

const usersSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   required: [true, "name is required"],
  // },
  // email: {
  //   type: String,
  //   required: [true, "email is required"],
  //   unique: true,
  // },
  trackId: {
    type: Number,
  },
  delivered: {
    type: String,
  },
  status: {
    type: String,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  shipDate: {
    type: String,
  },
  service: {
    type: String,
  },
  specialHandling: {
    type: String,
  },
});

const usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;
