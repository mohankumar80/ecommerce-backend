const Product = require('../models/products.model')

const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json({ success: true, products })
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to retrieve the products' })
	}
}

module.exports = getAllProducts;