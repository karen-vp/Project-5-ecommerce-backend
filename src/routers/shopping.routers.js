const {Router} = require ('express');
const router = Router();
const {getShopping, createShopping, updateShopping, deleteShopping} = require('../controllers/shopping.controllers')

//CRUD
//localhost:5000/customers
 router.get('/', getShopping);
 //localhost:5000/shopping
 router.post('/', createShopping);
 //localhost:5000/shopping/:id
 router.put('/:id', updateShopping);
  //localhost:5000/shopping/:id
 router.delete('/:id', deleteShopping);

 module.exports = router;