const express = require('express')
const app = express()
const router = express.Router()
const fullstacks = require('../models/fullstacks')



// router.get('/', function(req,res){
//   fullStack.find()
//   .then(function(stack){
//     console.log(stack)
//     return res.json({
//         data: data
//     })
//   })
// })



router.get('/api', function (req, res){

  fullstacks.find()
  .then(function(fullstacks){
    console.log('stack!!!!!' + fullstacks)
    return res.json({
      status: 'success',
      data: {
        fullStack: fullstacks
      }
    })
  })
})

// router.get('/', function(req, res){
//   fullStack.find()
//   .then(function(fullStack){
//     res.render('home', {
//       fullStack: fullStack
//     })
//   })
// })


module.exports = router
