const Product = require("../models/Product");

const modifyItem = async (req, res) => {
  try {
    // console.log("on est bien dans le modify item");
    // console.log(req.params);
    // console.log("le body", req.body);
    const { model, brand, year, price, isRestricted, isAvailable } = req.body;
    const response = await Product.findById(req.params.id);
    if (response) {
      console.log(response);
      response.model = model;
      response.brand = brand;
      response.year = year;
      response.price = price;
      response.isRestricted = isRestricted;
      response.isAvailable = isAvailable;
      await response.save();
      res.status(200).json({
        message: `Les informations du produit ${model} ont bien été mises à jour`,
      });
    } else {
      res
        .status(400)
        .json({ message: "L'id fournit ne correspond à aucun produit" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = modifyItem;
