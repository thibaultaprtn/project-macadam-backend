const Product = require("../models/Product");

const addItem = async (req, res) => {
  try {
    const { model, brand, year, price, isRestricted, isAvailable } = req.body;
    let product = new Product({
      model: model,
      brand: brand,
      year: year,
      price: price,
      isRestricted: isRestricted,
      isAvailable: isAvailable,
    });
    // console.log(model, brand, year, isRestricted, isAvailable);
    await product.save();
    res
      .status(200)
      .json({ message: `Le produit ${model} a bien été rajouté dans la BDD` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = addItem;
