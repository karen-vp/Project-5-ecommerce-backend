//CRUD funcionalidad

const {msgFormatConst} = require('../helpers/helpers');


const getCustomers = (req,res)=>{
  res.send('Estoy leyendo un usuario');
  msgFormatConst('getCustomers');
}

const createCustomers = (req,res)=>{
    res.send('Estoy creando un usuario');
    msgFormatConst('createCustomers');
  }

  const updateCustomers = (req,res)=>{
    res.send('Estoy actualizando un usuario');
    msgFormatConst('updateCustomers');
  }

  const deleteCustomers = (req,res)=>{
    res.send('Estoy borrando un usuario');
    msgFormatConst('deleteCustomers');
  }

module.exports = {
    getCustomers,
    createCustomers,
    updateCustomers,
    deleteCustomers

}