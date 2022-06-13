const mongoose = require("mongoose");

const url = "mongodb+srv://srinivas:Srinu2000$@testdb.3o83u.mongodb.net/test";

const DataBase = mongoose.connect(url, {
  useNewUrlParser: true,
  //useUnifiedTopology: true
  // useCreateIndex: true,
});

mongoose.connection.on("connected", function () {
  console.log("Mongoose default connection open to " + url);
});

// If the connection throws an error
mongoose.connection.on("error", function (err) {
  console.log("Mongoose default connection error: " + err);
});

const Use = mongoose.model("use", {
  name: String,
  age: Number,
});

const userdata = mongoose.model("userdata", {
  username: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    default: "Male",
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const address = mongoose.Schema({
  city: String,
  state: String,
  country: String,
}, {
  timestamps: true
})

const addressDetails = mongoose.model('addressDetails', address)

const add = new addressDetails({
  city: "hydrabad",
  state: "telegana",
  country: "india"
})

// addressDetails.findById({
//   name: 
// })


// add.save()
// .then((a) => {
//   console.log(a)
// }).catch((err) => {
//   console.log(err)
// })


// const userD = new userdata({
//   username: "vasu",
//   phonenumber: 556654566,
// })

// userD.save()
// .then((a) => {
//   console.log(a)
// }).catch((err) => {
//   console.log(err)
// })
// const me = new Use({
//   name: "Srinu",
//   age: 25,
// });

// me.save()
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });
module.exports = {DataBase, Use};
