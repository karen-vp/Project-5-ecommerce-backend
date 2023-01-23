//Controladores 
const Customer = require('./../models/customerSchema');
const { msgFormatConst, respApi } = require('../helpers/helpers');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


const getCustomers = async (req, res) => {
  try {
    const Customers = await Customer.find({})
    msgFormatConst('getCustomers');
    respApi(res, 'success', Customers);
  } catch (error) {
    res.status(500).json({ msg: 'Hubo un error obteniendo los datos' })
  }

}

const createCustomer = async (req, res) => {
  const { name, email, password } = req.body

  try {
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)
    const Customers = await Customer.create({
      name, email, password: hashedPassword
    })
    const payload = {
      user: {
        id: Customers._id
      }
    }
    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: 360000
      },
      (error, token) => {
        if (error) throw error
        res.json({ token })
      }
    )

    msgFormatConst('createCustomers');
    respApi(res, 'success', Customers);
  } catch (error) {
    return res.status(400).json({
      msg: error,
    })
  }

}

const loginCustomer = async(req, res)=>{
  const {email, password} = req.body
  try {
    
  } catch (error) {
    res.json({ msg: 'Hubo un error al iniciar sesión', error })
  }
}

const verifyCustomer = async(req, res)=>{
  try {
    msgFormatConst('verifyCustomers');
	} catch (error) {
	
		res.status(500).json({
			msg: 'Hubo un error al verificar el usuario',
			error,
		})
	}
}

const updateCustomer = (req, res) => {
  const { nombre, email } = req.body
	try {
    msgFormatConst('updateCustomers');
	} catch (error) {
		res.status(500).json({
			msg: 'Hubo un error actualizando el usuario',
		})
	}


}

const deleteCustomer = (req, res) => {
  res.send('Estoy borrando un usuario');
  msgFormatConst('deleteCustomers');
}

module.exports = {
  getCustomers,
  createCustomer,
  loginCustomer, 
  verifyCustomer,
  updateCustomer,
  deleteCustomer

}