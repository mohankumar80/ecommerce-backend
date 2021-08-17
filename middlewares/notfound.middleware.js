const notfound = (req, res) => {
	res.status(404).json({ success: false, message: 'the route you are looking for does not exist!!' })
}

module.exports = notfound;