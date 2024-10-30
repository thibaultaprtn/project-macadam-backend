const Product = require("../models/Product");

const getLimitedItems = async (req, res) => {
  const response = await Product.find({ isRestricted: false });
  res.status(200).json(response);
};

module.exports = getLimitedItems;
