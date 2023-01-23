const {Router} = require ('express');
const router = Router();
const {getCustomers, createCustomer, loginCustomer, verifyCustomer, updateCustomer, deleteCustomer} = require('../controllers/customers.controllers')

//CRUD
//localhost:5000/customers
 router.get('/', getCustomers);
 //localhost:5000/customers
 router.post('/', createCustomer);
 //localhost:5000/customers/login
 router.post('/login', loginCustomer);
 //localhost:5000/customers
 router.get('/verify', verifyCustomer);
 //localhost:5000/customers/:id
 router.put('/:id', updateCustomer);
  //localhost:5000/customers/:id
 router.delete('/:id', deleteCustomer);

 module.exports = router;