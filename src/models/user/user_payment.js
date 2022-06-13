const mongoose = require("mongoose");

const UserPayment = mongoose.Schema({
  userPaymentId: {
    type: mongoose.Types.ObjectId(),
  },
  userId: String,
  paymentType: String,
  provider: String,
  accountNo: Number,
  expiry: Date.UTC,
});
module.exports = UserPayment;
