// import mongoose library
const mongoose = require('mongoose');

// Product Model/Schema
const productSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    quantity: {
        required: true,
        type: Number
    }
})

const Products =  mongoose.model('Products', productSchema)

// Exporting Product Model
module.exports = Products
