const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
var app = express()
var cors = require('cors')

var port = process.env.PORT || 8080

mongoose.connect('mongodb://localhost/shopping-cart')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use('/api', require('./routes/api'))
app.listen(port);
console.log(`The Magic happes on port ${port}`);
