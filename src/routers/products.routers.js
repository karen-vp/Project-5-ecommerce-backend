const {Router} = require('express');
const router = Router();
const {getProducts, createProducts, updateProducts, deleteProducts} = require('../controllers/products.controllers')

const auth =  require('./../middlewares/authorization')

//RUTAS de los enpoints del CRUD

//localhost:5000/products/list
router.get('/list', getProducts);
//localhost:5000/products/create
router.post('/create', createProducts);
//localhost:5000/products/update
router.put('/update', updateProducts);
//localhost:5000/products/delete
router.delete('/delete', deleteProducts);

module.exports = router; 