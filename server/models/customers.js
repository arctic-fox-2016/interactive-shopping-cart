const mongoose = require('mongoose')
var Schema = mongoose.Schema

var customerSchema = mongoose.Schema({
  memberId: String,
  fullname: String,
  email: String,
  password: String,
  address: String,
  zipcode: String,
  phone: String
})

module.exports = mongoose.model('customers', customerSchema)
