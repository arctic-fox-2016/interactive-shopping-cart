const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// create a Schema
const itemSchema = new Schema({
    item_code: String,
    name: String,
    description: String,
    price: Number,
    stock: Number
}, { collection: 'items' })

const cartSchema = new Schema({
    member: {
        type: Schema.Types.ObjectId,
        ref: "Customer"
    },
    total: Number,
    transaction_date: Date,
    itemList: [{
        item_detail: {
            type: Schema.Types.ObjectId,
            ref: "Item"
        },
        qty: Number
    }]
}, { collection: 'carts' })

const customerSchema = new Schema({
    name: String,
    memberid: String,
    address: String,
    zipcode: Number,
    phone: String
}, { collection: 'customers' })

//create the model
const Item = mongoose.model('Item', itemSchema)
const Cart = mongoose.model('Cart', cartSchema)
const Customer = mongoose.model('Customer', customerSchema)

//export model
module.exports = { Item, Cart, Customer }
