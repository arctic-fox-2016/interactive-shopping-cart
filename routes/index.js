let express = require('express')
let router = express.Router()
let bodyParser = require('body-parser')
let Models = require('../models/shopping.js')
let http = require('http')

router.use(bodyParser())

//client
router.get('/register', function(req, res, next) {
  res.render('register.ejs')
})

//client
router.get('/display', function(req, res, next) {
  http.get({
    host: "localhost",
    port: "3000",
    path: "/api/display"
  }, function(response) {
    let hasil = ""
    response.on('data', function(d) {
      hasil += d
    });
    response.on('end', function() {
      let hasilJSON = JSON.parse(hasil)
      res.render('display.ejs', { customers: hasilJSON })
    });
  })
})

//
router.post('/edit/:id', function(req, res, next) {
  http.get({
    host: "localhost",
    port: "3000",
    path: `/api/edit/${req.params.id}`,
  }, function(response) {
    let hasil = ""
    response.on('data', function(d) {
      hasil += d
    });
    response.on('end', function() {
      let hasilJSON = JSON.parse(hasil)
      res.render('edit.ejs', { customer: hasilJSON })
    });
  })
})

//SERVER
router.post('/api/register/customer', function(req, res, next) {
  let newCustomer = new Models.Customers({ "member_id": req.body.member_id, "name": req.body.name, "address": req.body.address, "zipcode": req.body.zipcode, "phone": req.body.phone }).save(function(err, result) {
    if (err) {
      console.log(err)
    }
    res.redirect('/register')
  })
})

router.post('/api/register/item', function(req, res, next) {
  let newItem = new Models.Items({ "item_code": req.body.item_code, "name": req.body.name, "description": req.body.description, "price": req.body.price, "stock": req.body.stock }).save(function(err, result) {
    if (err) {
      console.log(err)
    }
    res.redirect('/register')
  })
})

router.post('/api/register/cart', function(req, res, next){
  Models.Customers.findOne({member_id: req.body.member_id}, function(err,result1){
    let newCart = new Models.Carts({member: result1._id, transaction_date: req.body.transaction_date}).save(function(err, result2){
      if(err){
        console.log(err)
      } else {
        for (let j in req.body.item_code){
          Models.Items.findOne({item_code: req.body.item_code[j]}, function(err, result3){
            console.log(req.body.item_code[j])
            console.log('nemu item')
            console.log(result2)
            console.log(result3)
            Models.Carts.update({ _id: result2._id}, { $push: {itemList:{"item_detail": result3._id, "qty": req.body.qty[j]}}}, function(err,result4){
              if(err){
                console.log(err)
              }
              console.log(result4)
            })
          })
        }
      }
      res.redirect('/register')
    })
  })
})


router.get('/api/display/user', function(req, res, next) {
  Models.Customers.find({}, function(err, result) {
    if (err) {
      console.log(err)
    } else {
      res.json(result)
    }
  })
})

router.get('/api/display/item', function(req, res, next) {
  Models.Items.find({}, function(err, result) {
    if (err) {
      console.log(err)
    } else {
      res.json(result)
    }
  })
})

router.get('/api/display/cart', function(req, res, next) {
  Models.Carts.find({}).populate('itemList.item_detail').populate('member').exec(function(err,result){
    if(err){
      console.log(err)
    } else {
      res.json(result)
    }
  })
})

router.post('/api/delete/:id', function(req, res, next) {
  Models.Customers.remove({ _id: req.params.id }, function(err) {
    if (err) {
      console.log(err)
    } else {
      res.redirect("/display")
    }
  })
})

router.get('/api/edit/:id', function(req, res, next) {
  Models.Customers.findOne({ _id: req.params.id }, function(err, result) {
    res.json(result)
  })
})

router.post('/api/edit/success/:id', function(req, res, next) {
  Models.Customers.update({ _id: req.params.id }, {member_id: req.body.member_id, name: req.body.name, address: req.body.address, zipcode: req.body.zipcode, phone: req.body.phone}, function(err){
    res.redirect("/display")
  })
})

module.exports = router
