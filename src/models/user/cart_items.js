const mongoose = require("mongoose");

const CartItem = mongoose.Schema(
  {
    cartItemId: mongoose.Types.ObjectId(),
    sessionId: Number,
    productId: Number,
    quantity: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = CartItem;