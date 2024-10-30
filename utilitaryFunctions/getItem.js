const Product = require("../models/Product");

const getItem = async (req, res) => {
  try {
    //   console.log("on est bien dans le get Item");
    //   console.log(req.params);
    const response = await Product.findById(req.params.id);
    // console.log(response);
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(400).json({ message: "erreur avec l'ID renseigné" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getItem;
