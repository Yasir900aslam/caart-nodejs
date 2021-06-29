const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  admin_mail: String,
  client_email: String,
  client_password: String,
});

module.exports = mongoose.model("clientSchema", clientSchema, "remSchema");
