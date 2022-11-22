const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  email: {
    type: String,
  },
  offEmail: {
    type: String,
  },
  password: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  userType: {
    type: String,
  },
  addr: {
    type: String,
  },
  dob: {
    type: String,
  },
});

const userDetail = mongoose.model("UserDetail", userSchema);
module.exports = userDetail;
