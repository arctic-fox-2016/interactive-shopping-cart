const mongoose = require('mongoose')
var Schema = mongoose.Schema

var itemSchema = mongoose.Schema({
  code: String,
  name: String,
  description: String,
  price: Number,
  stock: Number
})

module.exports = mongoose.model('items', itemSchema)
