const express = require('express')
const Buyer = require('../models/Buyer')
const Home = require('../models/Home')
// DONT FORGET THE MERGE PARAMS. This allows you to read any
// route params declared in server.js
const router = express.Router({ mergeParams: true })


router.post('/', (req, res) => {
    console.log(req.params.buyerId)
    Buyer.findById(req.params.buyerId).then((buyer) => {
      const newHome = new Home({})
      buyer.homes.push(newHome)
      return user.save()
    }).then((savedBuyer) => {
      res.send(savedBuyer)
    })
  })

  router.patch('/:id', (req, res) => {
    Buyer.findById(req.params.buyerId).then((buyer) => {
      const homeToUpdate = buyer.home.id(req.params.id)
      homeToUpdate.title = req.body.title
      homeToUpdate.description = req.body.description
      return buyer.save()
    }).then((savedBuyer) => {
      res.send(savedBuyer)
    })
  })

  router.delete('/:id', (req, res) => {
    Buyer.findById(req.params.buyerId).then((buyer) => {
      buyer.homes.id(req.params.id).remove()
      return buyer.save()
    }).then((savedBuyer) => {
      res.send(savedBuyer)
    })
  })
  
  module.exports = router;
  