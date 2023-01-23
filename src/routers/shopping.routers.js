const {Router} = require ('express');
const router = Router();
const {getShopping, createShopping, updateShopping, deleteShopping} = require('../controllers/shopping.controllers')

//CRUD
//localhost:5000/customers
 router.get('/', getShopping);
 //localhost:5000/shopping/create
 router.post('/create', createShopping);


 module.exports = router;