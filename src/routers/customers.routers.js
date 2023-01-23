const { Router } = require('express');
const router = Router();
const { getCustomers, createCustomer, loginCustomer, verifyCustomer, updateCustomer, deleteCustomer } = require('../controllers/customers.controllers')
//auth ES EL MIDDLEWARE PARA VERIFICAR QUE EL USUARIO ESTE LOGUEADO Y PUEDA ACCEDER A LAS RUTAS QUE LO REQUIERAN
const auth = require('./../middlewares/authorization')
//CRUD
//localhost:5000/customers
router.get('/list', auth, getCustomers);
//localhost:5000/customers
router.post('/signup', createCustomer);
//localhost:5000/customers/login
router.post('/login', loginCustomer);
//localhost:5000/customers
router.get('/verify', auth, verifyCustomer);
//localhost:5000/customers/:id
router.put('/update', auth, updateCustomer);
//  router.put('/:id', auth,updateCustomer);
//localhost:5000/customers/:id
router.delete('/delete', auth, deleteCustomer);

module.exports = router;