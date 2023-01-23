const {Router} = require ('express');
const router = Router();
const {getShopping, createShopping, updateShopping, deleteShopping} = require('../controllers/shopping.controllers')

//CRUD
//localhost:5000/customers
 router.get('/', getShopping);
 //localhost:5000/shopping
 router.post('/', createShopping);


 module.exports = router;