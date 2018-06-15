const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HomeSchema = new Schema({
title: {
    type: String,
    default: 'Home Title'
},

location: {
    type: String,
    default: 'Home Location'
},

price: {
    type: String,
    default: 'Home Price'
},

description: {
    type: String,
    default: 'Home Description'
}
},{
    timestamps: true
})

const BuyerSchema = new Schema({

    name: String, 
    homes: [ HomeSchema ]
})

module.exports = {
    BuyerSchema,
    HomeSchema
}