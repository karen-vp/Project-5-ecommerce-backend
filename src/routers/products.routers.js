const {Router} = require('express');
const router = Router();
const {getProducts, createProducts, updateProducts, deleteProducts} = require('../controllers/products.controllers')