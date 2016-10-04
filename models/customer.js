var mongoose = require('mongoose')
var Schema = mongoose.Schema

var customerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  member_id: {
    type: String,
    required: true
  },
  address: String,
  zipcode: String,
  phone: String
})

var Customer = mongoose.model('Customer', customerSchema)
module.exports Customer
