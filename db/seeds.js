require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const Buyer = require('../models/Buyer')
const Home = require('../models/Home')




const homeone = new Home({
  title: 'Modern',
  location: 'Atlanta, GA',
  description: "Open Plan,2030 sq.ft, Modern built, 2 beds, 1 and half bath,front and back yard..",
  price: '$150000'
})
const hometwo = new Home({
    title: 'Traditional',
    location: 'Mableton, GA',
    description: "Traditional,2400 sq.ft, good open space, 3 beds, 2 baths, front and back yard",
    price: '$250000' 
})
const smith = new Buyer({
  userName: 'smith_dawson',
  password: 'homer',
  homes: [homeone, hometwo]
})

Buyer.remove({})
  .then(() => smith.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())