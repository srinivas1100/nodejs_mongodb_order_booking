const mongoose = require("mongoose");

const UserAddress = mongoose.Schema({
  addressId: {
    type: mongoose.Types.ObjectId(),
  },
  userId: {
    type: String,
  },
  addressLine1: String,
  addressLine2: String,
  city: String,
  postalCode: String,
  country: String,
  telephone: String,
  mobile: String,
});

module.exports = UserAddress;
