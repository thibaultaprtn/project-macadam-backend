const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  model: String,
  brand: String,
  year: Number,
  price: Number,
  isRestricted: { type: Boolean, default: false },
  isAvailable: { type: Boolean, default: true },
});

module.exports = Product;
