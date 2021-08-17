const mongoose = require('mongoose');

const DBCredentials = process.env['DB_Credentials'];

const initializeDBConnection = async () => {
	try {
		await mongoose.connect(DBCredentials, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
		console.log('successfully connected to database');
	} catch (error) {
		console.log('error occured while connecting to database',error)
	}
}

module.exports = initializeDBConnection;