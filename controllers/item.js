var item = require('../models/item.js')

module.exports = {
    saveItem: function(req, res, next) {
        var newItem = item({
          item_code : req.query.item_code,
          name : req.query.item_name,
          description : req.query.description,
          price : Number(req.query.price),
          stock : Number(req.query.stock)
        })

        newItem.save(function(err) {
          if (err) throw err
          console.log('Item saved!');

        })
    },

    loadItem : function(req, res, next) {
      item.find(function(err, result) {
        res.json(result)
      })
    }
}
