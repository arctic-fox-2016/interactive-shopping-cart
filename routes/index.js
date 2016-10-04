var express = require('express');
var router = express.Router();
var item = require('../models/item')
var customer = require('../models/item')
var controller = require('../controllers/item')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Welcome To Our Store'
    });
});

router.get('/list', (req, res, next) => {
  res.render('list')
})

router.get('/item', controller.loadItem)

// api endpoint
router.post('/item', controller.saveItem)

router.get('/customer', function(req, res, next) {
    res.render('customer', {})
})

router.get('/transaction', function(req, res, next) {
    res.render('transaction', {})
})


module.exports = router;
