const User = require('../models/users.model');

const postIntoCart = async(req, res) => {
	try {
		const { userId } = req.body;
		const { productId } = req.params;
		const user = await User.findById(userId)
		const productIndex = user.cart.findIndex(item => String(item.productId) === productId)
		if(productIndex === -1) {
			user.cart.push({ productId, quantity: 1 })
		}
		await user.save();
		res.status(200).json({ success: true, user })
	} catch (error) {
		console.log(error);
		res.status(400).json({ success: false, message: 'failed to post the product into the cart' })
	}
}

module.exports = postIntoCart;