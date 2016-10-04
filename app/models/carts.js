// app/models/user.js
// load the things we need
var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

// define the schema for our user model
var cartSchema = mongoose.Schema({
    memberid: [{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }],
    total: String,
    transaction_date: String,
    itemlist: [{
        itemcode: [{
            type: Schema.Types.ObjectId,
            ref: 'Items'
        }]
    }]
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Carts', cartSchema);
