const express = require("express");
const userModel = require("../models/user/user_model");

const router = express.Router();

// create a new user
router.post("/user", async (req, res) => {
  const user = await userModel({
    userName: req.body.userName,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    telePhone: req.body.telePhone,
  });
  user
    .save()
    .then((a) => {
      console.log(a);
      res.status(200).send(a);
    })
    .catch(() => {
      console.log(err);
      res.status(404).send(err);
    });
});

//get all users in database
router.get("/getAllUsers", async (req, res) => {
  const allUsers = await userModel.find({});
  try {
    res.status(200).send(allUsers);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// //get user find by id
// router.get('/user/:id',async (req, res) => {
//   const id = 
 
//   try {
//     const user = await userModel.findById({});
//     res.status(200).send(user);
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error);
//   }
// })

module.exports = router;
