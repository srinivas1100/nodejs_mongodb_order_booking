const express = require("express");
const userModel = require("../models/user/user_model");

const router = express.Router();

router.post("/user", (req, res) => {
  const user = new userModel.create({
    //   userId: "200",
    name: "srinu",
  });
  user.save();
  res.status(200).send(user);
});

module.exports = router;
