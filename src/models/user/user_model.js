const mongoose = require("mongoose");

const User = mongoose.Schema(
  {
    // userId: {
    //   type: mongoose.Types.ObjectId(),
    // },
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    telePhone: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel =  mongoose.model("users", User);

module.exports = UserModel;
