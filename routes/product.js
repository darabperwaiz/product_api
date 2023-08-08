// Import Libraries
const express = require("express");
const router = express.Router();

// Import Product controller
const product = require('../controller/Product');

// Setting Route for different operation
router.post('/create', product.create)
router.get('/', product.getProducts)
router.delete('/:id', product.delete)
router.post('/:id/update_quantity/', product.update)


module.exports = router
