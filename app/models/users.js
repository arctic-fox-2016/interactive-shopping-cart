// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local: {
        fullname: String,
        email: String,
        password: String,
        memberid: String,
        address: String,
        zipcode: String,
        phone: String
    }
    // },
    // facebook: {
    //     id: String,
    //     token: String,
    //     email: String,
    //     name: String
    // },
    // twitter: {
    //     id: String,
    //     token: String,
    //     displayName: String,
    //     username: String
    // },
    // google: {
    //     id: String,
    //     token: String,
    //     email: String,
    //     name: String
    // }

});



// create the model for users and expose it to our app
module.exports = mongoose.model('Users', userSchema);
