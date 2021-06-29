const mongoose = require("mongoose");

const auditSchema = new mongoose.Schema({
  email: String,
  policy: String,
  status: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("auditSchema", auditSchema, "auditSchema");
