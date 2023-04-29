const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  name: { type: String, require: true },
  logo_url: { type: String, require: true },
});

module.exports = mongoose.model("Brand", brandSchema);
