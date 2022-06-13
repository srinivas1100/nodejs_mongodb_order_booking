const mongoose = require('mongoose');

const ShoppingSession = mongoose.Schema({
    shoppingSessionId: mongoose.Types.ObjectId(),
    sessionId : Number,
    productId : Number,
    quantity : Number,
}, {
    timestamps: true,
})

module.exports = ShoppingSession;