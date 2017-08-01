const express = require("express")
const mustache = require("mustache-express")
const bodyParser = require("body-parser")
const app = express()
const mongoose = require('mongoose')
const fs = require('fs')
const FPG = require('fake-product-generator')
const rs = FPG(500) // creates 500 products!
const ws = fs.createWriteStream('./data.json')
var request =require('request');
// rs.pipe(ws)

const fullstacks = require('./models/fullstacks')
const pageviews = require('./models/pageviews')





const Home = require ('./routes/home')
const ProductId = require ('./routes/productId')


mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/newStack')

app.engine('mustache', mustache());
app.set("view engine", 'mustache');
app.set("layout", 'layout');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(Home)
app.use(ProductId)

app.listen(process.env.PORT || 4000, function(){
  console.log("everything looks good!")
})
