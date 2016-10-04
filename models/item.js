var mongoose = require('mongoose')
var Schema = mongoose.Schema

// create a Schema
var itemSchema = new Schema({
    item_code: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        require: true
    },
    description: String,
    price: Number,
    stock: Number
})

var Item = mongoose.model('Item', itemSchema)
module.exports = Item

/*
item_code
name
description
price
stock
*/
