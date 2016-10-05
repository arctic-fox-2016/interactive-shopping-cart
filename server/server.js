const express = require('express')
const mongoose = require('mongoose')
var app = express()
var port = process.env.PORT || 8080

mongoose.connect('mongodb://localhost/shopping-cart')

app.listen(port);
console.log(`The Magic happes on port ${port}`);
