const express = require('express')
const app = express()
const router = express.Router()

const fullstacks = require('../models/fullstacks')
const pageviews = require('../models/pageviews')


router.get('/products/:id', function (req, res){

  id = req.params.id
  console.log('id' + id)




})

module.exports = router
