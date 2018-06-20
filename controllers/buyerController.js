const express = require('express')
const Buyer = require('../models/Buyer')
const router = express.Router()

router.get('/', (req, res) => {
  Buyer.find().then((buyers) => {
    res.send(buyers)
  })
})

router.post('/', (req, res) => {
  const newBuyer = new Buyer({
    name: req.body.name
  })

  newBuyer.save().then(() => {
    res.redirect('/api/buyer')
  })
})

module.exports = router;