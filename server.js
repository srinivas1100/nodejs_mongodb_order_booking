const express = require("express");
const {DataBase, Use} = require("./src/database/database");
const user = require('./src/routes/user_routes');

const app = express();

//app.use(express.json());

app.use('/v1', user);

app.get('/user', (req, res) => {
   Use.find({}).then((a) =>{
    res.send(a);
   }).catch((err) =>{
    res.send(err)
   });
})

app.listen(4444, () => {
  console.log("server run in port 4444");
});
