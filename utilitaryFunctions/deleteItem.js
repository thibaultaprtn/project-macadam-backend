const Product = require("../models/Product");

const deleteItem = async (req, res) => {
  try {
    console.log("on est bien dans le delete");
    console.log(req.params);
    const response = await Product.findByIdAndDelete(req.params.id);
    if (response) {
      //   console.log("response dans le back end", response);
      res
        .status(200)
        .json({
          message: `Le produit ${response.model} a bien été supprimé de la BDD`,
        });
    } else {
      res
        .status(400)
        .json({ message: "La suppression du produit n'a pas pu aboutir" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = deleteItem;
