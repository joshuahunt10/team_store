const mongoose = require('mongoose')

const ViewsSchema = new mongoose.Schema({

  product_id: {type: Number},
  count: {type: Number}


})
const pageviews = mongoose.model('pageviews', ViewsSchema)

module.exports = pageviews
