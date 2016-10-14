  const Model = require('../models/library')

  module.exports = {
      showLibrary: showLibrary,

      showItem: showItem,
      showAddItem: showAddItem,
      processAddItem: processAddItem,
      showEditItem: showEditItem,
      processEditItem: processEditItem,
      deleteItem: deleteItem,

      showCustomer: showCustomer,
      showAddCustomer: showAddCustomer,
      processAddCustomer: processAddCustomer,
      showEditCustomer: showEditCustomer,
      processEditCustomer: processEditCustomer,
      deleteCustomer: deleteCustomer,

      showCart: showCart,
      showAddCart: showAddCart,
      processAddCart: processAddCart,
      showEditCart: showEditCart,
      processEditCart: processEditCart,
      deleteCart: deleteCart,

  }

  function showLibrary(req, res) {
      Model.Item.find({}, (err, results) => {
          var items = results

          Model.Customer.find({}, (err, results) => {
              var customers = results
              
              Model.Cart.find({}, (err, results) => {
                  var carts = results

                  res.render('pages/library', {
                      items: items,
                      customers: customers,
                      carts: carts
                  })
              })
          })
      })
  }

  //delete item
  function deleteItem(req, res) {
      Model.Item.remove({ _id: req.params.id }, (err) => {
          res.redirect('/library')
      })
  }

  //edit item
  function showEditItem(req, res) {
      Model.Item.findOne({ _id: req.params.id }, (err, item) => {
          res.render('pages/edititem', {
              item: item
          })
      })
  }

  function processEditItem(req, res) {

      Model.Item.findOne({ _id: req.params.id }, (err, item) => {
          item.item_code = req.body.item_code
          item.name = req.body.name
          item.description = req.body.description
          item.price = req.body.price
          item.stock = req.body.stock

          item.save((err) => {
              if (err)
                  throw err;

              res.redirect('/library')
          })
      })
  }

  function showAddItem(req, res) {
      res.render('pages/additem')
  }

  function processAddItem(req, res) {

      var item = new Model.Item({
          item_code: req.body.item_code,
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          stock: req.body.stock
      })

      item.save((err) => {
          if (err)
              throw err

          res.redirect(`/library/items/${item._id}`)
      })
  }

  function showItem(req, res) {
      Model.Item.findOne({ _id: req.params.id }, (err, item) => {
          if (err) {
              res.status(404)
              res.send('Item not found!')
          }

          res.render('pages/singleitem', {
              item: item
          })
      })
  }

  //=====================================================================

  function deleteCustomer(req, res) {
      Model.Customer.remove({ _id: req.params.id }, (err) => {
          res.redirect('/library')
      })
  }

  function showEditCustomer(req, res) {
      Model.Customer.findOne({ _id: req.params.id }, (err, customer) => {
          res.render('pages/editcustomer', {
              customer: customer
          })
      })
  }

  function processEditCustomer(req, res) {

      Model.Customer.findOne({ _id: req.params.id }, (err, customer) => {
          customer.name = req.body.name
          customer.memberid = req.body.memberid
          customer.address = req.body.address
          customer.zipcode = req.body.zipcode
          customer.phone = req.body.phone

          customer.save((err) => {
              if (err)
                  throw err;

              res.redirect('/library')
          })
      })
  }

  function showAddCustomer(req, res) {
      res.render('pages/addcustomer')
  }

  function processAddCustomer(req, res) {
      var customer = new Model.Customer({
          name: req.body.name,
          memberid: req.body.memberid,
          address: req.body.address,
          zipcode: req.body.zipcode,
          phone: req.body.phone
      })

      customer.save((err) => {
          if (err)
              throw err

          res.redirect(`/library/customers/${customer._id}`)
      })
  }

  function showCustomer(req, res) {
      Model.Customer.findOne({ _id: req.params.id }, (err, customer) => {
          if (err) {
              res.status(404)
              res.send('Customer not found!')
          }

          res.render('pages/singlecustomer', {
              customer: customer
          })
      })
  }

//=====================================================================

  function deleteCart(req, res) {
      Model.Cart.remove({ _id: req.params.id }, (err) => {
          res.redirect('/library')
      })
  }

  function showEditCart(req, res) {
      Model.Cart.findOne({ _id: req.params.id }, (err, customer) => {
          res.render('pages/editcustomer', {
              customer: customer
          })
      })
  }

  function processEditCart(req, res) {

      Model.Cart.findOne({ _id: req.params.id }, (err, customer) => {
          customer.name = req.body.name
          customer.memberid = req.body.memberid
          customer.address = req.body.address
          customer.zipcode = req.body.zipcode
          customer.phone = req.body.phone

          customer.save((err) => {
              if (err)
                  throw err;

              res.redirect('/library')
          })
      })
  }

  function showAddCart(req, res) {
      Model.Cart.findOne({ _id: req.params.id }, (err, customer) => {
          res.render('pages/addcustomer', {
              customer: customer
          })
      })
  }

  function processAddCart(req, res) {
      var customer = new Model.Cart({
          //member: req.body.member,
          total: req.body.total,
          transaction_date: req.body.transaction_date,
          zipcode: req.body.zipcode,
      })

      customer.save((err) => {
          if (err)
              throw err

          res.redirect(`/library/customers/${customer._id}`)
      })
  }

  function showCart(req, res) {
      Model.Cart.findOne({ _id: req.params.id }, (err, customer) => {
          if (err) {
              res.status(404)
              res.send('Cart not found!')
          }

          res.render('pages/singlecustomer', {
              customer: customer
          })
      })
  }