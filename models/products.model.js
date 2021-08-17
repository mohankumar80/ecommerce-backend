const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
	url: {
		type: String,
		required: [true, 'why is there no url ?']
	},
	name: {
		type: String,
		required: [true, 'dont you have a name?']
	},
	author: {
		type: String,
		required: [true, 'every book does have an author!!']
	},
	category: {
		type: String,
		enum: ['Autobiographies', 'Biography', 'Audiobook' ],
		required: true
	},
	price: {
		type: Number,
		min: 1,
		required: [true, 'every book has got a price']
	},
	fastDelivery: {
		type: Boolean,
		required: true
	},
	inStock: {
		type: Boolean,
		required: true
	}
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;