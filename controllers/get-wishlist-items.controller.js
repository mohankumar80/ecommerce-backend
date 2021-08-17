const User = require('../models/users.model');

const getWishlistItems = async (req, res) => {
	try {
		const { userId } = req.params;
		const user = await User.findById(userId).populate('wishlist');
		res.status(200).json({ success: true, wishlist: user.wishlist })
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to retrieve wishlist details' })
	}
}

module.exports = getWishlistItems;