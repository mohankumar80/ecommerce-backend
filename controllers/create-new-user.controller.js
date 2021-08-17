const User = require('../models/users.model');

const createNewUser = async(req, res) => {
	try {
		let NewUser = req.body;
		NewUser = new User(NewUser);
		await NewUser.save()
		res.status(200).json({ success: true, user: NewUser })
	} catch (error) {	
		res.status(400).json({ success: false, message: 'user cannot be created!! please try again!!' })
	}
}

module.exports = createNewUser;