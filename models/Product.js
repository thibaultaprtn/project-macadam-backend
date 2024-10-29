const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  name: String,
  isRestricted: Boolean,
});

module.exports = Product;
