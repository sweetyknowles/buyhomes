const mongoose = require('mongoose')
const schemas = require('../db/schema')

const Buyer = mongoose.model('buyer', schemas.BuyerSchema)

module.exports = Buyer