const loginUser = require('./login-user.controller');
const createNewUser = require('./create-new-user.controller');
const getAllCartItems = require('./get-cart-items.controller');
const postIntoCart = require('./post-into-cart.controller');
const deleteFromCart = require('./delete-from-cart.controller');
const increaseProductQuantity = require('./increase-product-quantity.controller');
const decreaseProductQuantity = require('./decrease-product-quantity.controller');
const getWishlistItems = require('./get-wishlist-items.controller');
const postIntoWishlist = require('./post-into-wishlist.controller');
const deleteFromWishlist = require('./delete-from-wishlist.controller');
const clearWishlist = require('./delete-all-wishlist-items.controller')

module.exports = { loginUser, createNewUser, getAllCartItems, postIntoCart, deleteFromCart, increaseProductQuantity, decreaseProductQuantity, getWishlistItems, postIntoWishlist, deleteFromWishlist, clearWishlist };