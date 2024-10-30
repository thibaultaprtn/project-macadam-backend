const mongoose = require("mongoose");

const Cart = mongoose.model("Cart", {
  username: { type: String, default: "" },
  items: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
    },
  ],
  isActive: { type: Boolean, default: true },
});

module.exports = Cart;
