const express = require('express')
var path = require('path');
var app = express()
var port = process.env.PORT || 9000
var ejs = require ('ejs')

app.set('view engine', 'ejs');

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require('./routes'))
app.listen(port);
console.log(`The Magic happes on port ${port}`);
