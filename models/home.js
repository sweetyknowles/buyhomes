const mongoose = require('mongoose')
const schemas = require('../db/schema')

const Home = mongoose.model('idea', schemas.HomeSchema)

module.exports = Home