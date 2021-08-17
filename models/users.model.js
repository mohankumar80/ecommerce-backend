const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: [true, 'username should be unique']
	},
	password: {
		type: String,
		minLength: 8,
		required: [true, 'password should be greater than 8 characters']
	},
	cart: [
		{ 
			productId: {
				type: Schema.Types.ObjectId, 
				ref: 'Product'
			},
			quantity: {
				type: Number,
				required: true
			}
		}
	],
	wishlist: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Product'
		}
	]
})

const User = mongoose.model('User', userSchema);

module.exports = User;