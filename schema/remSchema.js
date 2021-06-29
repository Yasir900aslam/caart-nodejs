const mongoose = require("mongoose");

const remSchema = new mongoose.Schema({
  client_email: String,
  remediation_name: String,
  Status: String,
  isapplied: String,
  remarks: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("remSchema", remSchema, "remSchema");
