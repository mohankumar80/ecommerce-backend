const User = require('../models/users.model');

const postIntoWishlist = async (req, res) => {
	try {
		const { userId } = req.body;
		const { productId } = req.params;
		const user = await User.findById(userId);
		const product = user.wishlist.includes(productId);
		if(!product) {
			user.wishlist.push(productId)
		}		await user.save();
		res.status(200).json({ success: true, wishlist: user.wishlist })
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to post the product into database' })
	}
}

module.exports = postIntoWishlist;