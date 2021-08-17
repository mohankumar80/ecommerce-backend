const User = require('../models/users.model');

const deleteFromWishlist = async (req, res) => {
	try {
		const { userId } = req.body;
		const { productId } = req.params;
		const user = await User.findById(userId)
		user.wishlist.pull(productId);
		await user.save()
		res.status(200).json({ success: true, user })
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to delete the product from wishlist' })
	}
}

module.exports = deleteFromWishlist;