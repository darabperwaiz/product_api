// Import Product Model
const Products = require('../model/product');


// Create Product
module.exports.create = async function(req, res){
    const product = new Products({
        name: req.body.name,
        quantity: req.body.quantity
    })

    try {
        const productToSave = await product.save();
        res.status(200).json(productToSave)
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}



// Get All Product
module.exports.getProducts = async function(req, res) {
    const product = await Products.find({

    });
    
    return res.status(200).json({
        data: {
            products: product
        },
        message: "All Products"
    })

}




// Delete Product by using id
module.exports.delete = async function(req,res) {
    const product = await Products.findById(req.params.id)
    console.log(product)

    product.deleteOne();

    return res.status(200).json({
        data: {
        message: "product deleted"
        }
    })

}




// Update Quantity
module.exports.update = async function(req, res){

    const product = await Products.findByIdAndUpdate(req.params.id, {
        quantity: req.query.number
    })

    try {
        res.status(200).json({
            data: {
                product: product
            },
            message: "updated successfully"
        })
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}