const User = require('../models/users.model');

const loginUser = async(req, res, next) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({username})
		if(user.password === password) {
			return res.status(200).json({ success: true, user });
		}
		next();
	} catch (error) {
		res.status(400).json({ success: false, message: 'username or password is not correct' })
	}
}

module.exports = loginUser;