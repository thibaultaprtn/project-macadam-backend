const mongoose = require("mongoose");

const Cart = mongoose.model("Cart", {
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
    },
  ],
  isActive: Boolean,
});

module.exports = Cart;
