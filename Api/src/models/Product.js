const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image_url: { type: Array, required: true },
  price: { type: Number, required: true },
  views: { type: Number, required: true },
});

module.exports = mongoose.model("Product", productSchema);
