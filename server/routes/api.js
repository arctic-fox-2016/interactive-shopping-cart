const express = require('express')
const router = express.Router()
const items = require('../controllers/items')

module.exports = router
router.get('/items', items.display)
router.post('/items', items.insert)
router.put('/items/:id', items.update)
router.delete('/items/:id', items.delete)
