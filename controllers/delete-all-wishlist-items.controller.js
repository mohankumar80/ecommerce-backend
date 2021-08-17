const User = require('../models/users.model');

const clearWishlist = async (req, res) => {
	try {
		const { userId } = req.params;
		const user = await User.findById(userId);
		user.wishlist = []
		await user.save()
		res.status(200).json({ success: true, wishlist: user.wishlist })
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to clear the wishlist' })
	}
}

module.exports = clearWishlist;