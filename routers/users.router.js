const express = require('express');
const usersRouter = express.Router();
const { loginUser, createNewUser, getAllCartItems, postIntoCart, deleteFromCart, increaseProductQuantity, decreaseProductQuantity, getWishlistItems, postIntoWishlist, deleteFromWishlist, clearWishlist } = require('../controllers/index');

usersRouter.route('/login')
.post(loginUser)

usersRouter.route('/signup')
.post(createNewUser)


usersRouter.route('/:userId/cart')
.get(getAllCartItems)


usersRouter.route('/cart/:productId')
.post(postIntoCart)
.delete(deleteFromCart)


usersRouter.route('/cart/:productId/:productQuantity')
.put(increaseProductQuantity)
.patch(decreaseProductQuantity)


usersRouter.route('/:userId/wishlist')
.get(getWishlistItems)
.delete(clearWishlist)

usersRouter.route('/wishlist/:productId')
.post(postIntoWishlist)
.delete(deleteFromWishlist)

module.exports = usersRouter;