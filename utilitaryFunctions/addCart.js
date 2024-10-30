const Cart = require("../models/Cart");

const addCart = async (req, res) => {
  try {
    console.log(req.body);
    const { cart, username } = req.body;
    console.log(cart, username);
    let newCart = new Cart({
      items: cart,
      username: username ? username : "",
    });
    await newCart.save();
    res.status(200).json({ message: "Le panier a bien été validé" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = addCart;
