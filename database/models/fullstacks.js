
const mongoose = require('mongoose')

const fullStackSchema = new mongoose.Schema({

  part_number: {type: Number},
  name: {type:String},
  description: {type: String},
  price: {type: Number},
  image: {type: String}


})
const fullstacks = mongoose.model('fullstacks', fullStackSchema)

module.exports = fullstacks
