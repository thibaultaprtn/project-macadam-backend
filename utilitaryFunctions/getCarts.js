const Cart = require("../models/Cart");
const Product = require("../models/Product");

const getCarts = async (req, res) => {
  try {
    const response = await Cart.find()
      .populate({
        path: `items`,
        populate: { path: "_id", model: `Product` },
      })
      .exec();
    // console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getCarts;
