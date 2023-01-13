//CRUD funcionalidad

const {msgFormatConst} = require('../helpers/helpers');


const getShopping = (req,res)=>{
  res.send('Estoy leyendo un compra');
  msgFormatConst('getShopping');
}

const createShopping = (req,res)=>{
    res.send('Estoy creando un compra');
    msgFormatConst('createShopping');
  }

  const updateShopping = (req,res)=>{
    res.send('Estoy actualizando un compra');
    msgFormatConst('updateShopping ');
  }

  const deleteShopping = (req,res)=>{
    res.send('Estoy borrando un compra');
    msgFormatConst('deleteShopping');
  }

module.exports = {
    getShopping,
    createShopping,
    updateShopping,
    deleteShopping

}