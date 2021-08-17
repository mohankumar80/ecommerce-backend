const User = require('../models/users.model');

const decreaseProductQuantity = async(req, res) => {
	try {
		const { userId } = req.body;
		const { productId, productQuantity } = req.params;
		const user = await User.findById(userId);
		user.cart = user.cart.filter(item => {
			if(String(item.productId) === productId) {
				if(parseInt(productQuantity) !== 1) {
					item.quantity = productQuantity - 1
					return item
				} else {
					user.cart.pull(item)
					return
				}
			} return item;
		})
		await user.save()
		res.status(200).json({ success: true, cart: user.cart })
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to decrease the product quantity' })
	}
}

module.exports = decreaseProductQuantity;