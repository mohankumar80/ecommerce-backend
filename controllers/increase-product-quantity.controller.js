const User = require('../models/users.model');

const increaseProductQuantity = async (req, res) => {
	try {
		const { userId } = req.body;
		const { productId, productQuantity } = req.params;
		const user = await User.findById(userId)
		user.cart = user.cart.map(item => {
			if(String(item.productId) === productId) {
				item.quantity = parseInt(productQuantity) + 1;
				return item;
			} return item;
		})
		await user.save()
		res.status(200).json({ success: true, user })
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to increase the product quantity' })
	}
}

module.exports = increaseProductQuantity;