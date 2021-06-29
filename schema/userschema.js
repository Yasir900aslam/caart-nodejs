const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: String,
  company: String,
  role: String,
  email: String,
  password: String,
  remarks: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("userSchema", userSchema, "userSchema");
