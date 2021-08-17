const User = require('../models/users.model');

const deleteFromCart = async (req, res) => {
	try {
		const { userId } = req.body;
		const { productId } = req.params;
		const user = await User.findById(userId)
		const product = user.cart.find(item => String(item.productId) === productId)
		user.cart.pull(product);
		await user.save()
		res.status(200).json({ success: true, user })
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to delete the product from the cart' })
	}
}

module.exports = deleteFromCart;