const express = require('express');
const productsRouter = express.Router();
const getAllProducts = require('../controllers/get-all-products.controller')

productsRouter.route('/')
.get(getAllProducts);

module.exports = productsRouter;