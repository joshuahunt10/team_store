const express = require("express")
const mustache = require("mustache-express")
const bodyParser = require("body-parser")
const app = express()
const mongoose = require('mongoose')
const fs = require('fs')
const FPG = require('fake-product-generator')
const rs = FPG(500) // creates 500 products!
const ws = fs.createWriteStream('./data.json')
const fullstacks = require('./models/fullstacks')
var request =require('request');
// rs.pipe(ws)




const Home = require ('./routes/home')


mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/newStack')

app.engine('mustache', mustache());
app.set("view engine", 'mustache');
app.set("layout", 'layout');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));

//
// app.use('/', function(req, res){
//   var url = apiServerHost + req.url;
//   req.pipe(request(url)).pipe(res);
//   .catch(function(err){
//     console.log(err)
//   })
// });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(Home)
app.listen(process.env.PORT || 4000, function(){
  console.log("everything looks good!")
})

 // let stack = new fullStack({
 //    part_number: 1,
 //    name: 'bob',
 //    description: 'blue',
 //    price: 10,
 //    image: 'this.com'
 //  })
 //  stack.save().then(function(req, res){
 //    console.log('stack has been saved')
 //  }).catch(function(err){
 //    console.log('There was an error!')
 //  })
