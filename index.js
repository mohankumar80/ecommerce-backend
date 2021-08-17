const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
  
const app = express();
app.use(cors());
app.use(bodyParser.json());

const notfound = require('./middlewares/notfound.middleware');
const initializeDBConnection = require('./db/db.connect');
const productsRouter = require('./routers/products.router');
const usersRouter = require('./routers/users.router')

initializeDBConnection();

app.get('/', (req, res) => {
	res.status(200).json({ success: true, message: 'welcome to ecommerce backend' })
});

app.use('/products', productsRouter);
app.use('/user', usersRouter);


/*
	404 NOT FOUND.
	DON'T MOVE THIS FROM HERE.
	SHOULD ALWAYS BE AT THE END.
*/
app.use('*', notfound)

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
	console.log(`server started on port: ${PORT}`)
})