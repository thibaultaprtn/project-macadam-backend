const Product = require("../models/Product");

const getAllItems = async (req, res) => {
  try {
    const response = await Product.find();
    // console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getAllItems;

//   try {

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
