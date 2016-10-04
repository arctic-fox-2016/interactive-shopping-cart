var mongoose = require('mongoose')
var Schema = mongoose.Schema

var cartSchema = new Schema({
  memberid : {
    $ref: "Customer",
    $id: "_id"
    required: true
  },
  total: Number,
  transaction_date: Date,
  item_list: [{
    $ref: "Item",
    $id: "_id"

  }]
})

var Cart = mongoose.model('Cart', cartSchema)
module.exports = Cart
