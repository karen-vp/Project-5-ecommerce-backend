const { Router } = require('express');
const router = Router();
const { getCustomers, createCustomer, loginCustomer, verifyCustomer, updateCustomer, deleteCustomer } = require('../controllers/customers.controllers')
//auth ES EL MIDDLEWARE PARA VERIFICAR QUE EL USUARIO ESTE LOGUEADO Y PUEDA ACCEDER A LAS RUTAS QUE LO REQUIERAN
const auth = require('./../middlewares/authorization')
//RUTAS de los enpoints del CRUD
//localhost:5000/customers/list
router.get('/list', auth, getCustomers);
//localhost:5000/customers/signup
router.post('/signup', createCustomer);
//localhost:5000/customers/login
router.post('/login', loginCustomer);
//localhost:5000/customers/verify
router.get('/verify', auth, verifyCustomer);
//localhost:5000/customers/update
router.put('/update', auth, updateCustomer);
//localhost:5000/customers/delete
router.delete('/delete', auth, deleteCustomer);

module.exports = router;