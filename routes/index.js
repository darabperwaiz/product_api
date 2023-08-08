// Import Libraries
const express = require('express');
const router = express.Router();

// Products route
router.use('/api/products', require('./product'));


module.exports = router;