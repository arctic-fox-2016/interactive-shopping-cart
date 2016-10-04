//create new express router
const express = require('express'),
  router = express.Router()
  mainController = require('./controllers/main.controller')
  dataController = require('./controllers/data.controller')

//export router
module.exports = router

//============define routes===========

//main routes
router.get('/', mainController.showHome)

//show library
router.get('/library', dataController.showLibrary)

//create item
router.get('/library/items/add', dataController.showAddItem)
router.post('/library/items/add', dataController.processAddItem)

//edit item
router.get('/library/items/:id/edit', dataController.showEditItem)
router.post('/library/items/:id', dataController.processEditItem)

//delete item
router.get('/library/items/:id/delete', dataController.deleteItem)

//show single item
router.get('/library/items/:id', dataController.showItem)

//======================================================================

//create customer
router.get('/library/customers/add', dataController.showAddCustomer)
router.post('/library/customers/add', dataController.processAddCustomer)

//edit customer
router.get('/library/customers/:id/edit', dataController.showEditCustomer)
router.post('/library/customers/:id', dataController.processEditCustomer)

//delete customer
router.get('/library/customers/:id/delete', dataController.deleteCustomer)

//show single customer
router.get('/library/customers/:id', dataController.showCustomer)



