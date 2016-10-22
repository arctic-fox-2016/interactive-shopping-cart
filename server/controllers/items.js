var Items = require('../models/items')

module.exports = {
  display: display,
  insert: insert,
  update: update,
  delete: deleterecord
}

function display(req, res, next){
  Items.find({}, (err, results) => {
    res.json(results)
  })
}

function insert(req, res, next){
  var items = new Items({
    code: req.body.code,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    stock: req.body.stock
  })

  items.save((err) => {
    if(err) throw err
    res.json(items)
  })
}

function update(req, res, next){
  Items.findOne({
    _id: req.params.id
  }, (err, items) => {
    if(err) throw err

    items.code = req.body.code
    items.name = req.body.name
    items.description = req.body.description
    items.price = req.body.price
    items.stock = req.body.stock

    items.save((err) => {
      if(err) throw err
      res.json(items)
    })
  })
}

function deleterecord(req, res, next){
  Items.findOne({
    _id: req.params.id
  }, (err, items) => {
    if(err) throw err

    items.remove((err) => {
      if(err) throw err
      res.json(items)
    })
  })
}
