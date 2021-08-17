const User = require('../models/users.model');

const getAllCartItems = async (req, res) => {
	try {
		const { userId } = req.params;
		const user = await User.findById(userId).populate('cart.productId')
		const cartItems = user.cart;
		const normalizedCartItems = cartItems.map(cartItem => {
			let { productId, quantity } = cartItem._doc;
			return { _id: productId._id, ...productId._doc, quantity }
		})
		res.status(200).json({ success: true, cart: normalizedCartItems })
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to retrieve cart details' })
	}
}

module.exports = getAllCartItems;