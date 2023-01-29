//Controladores 
const Customer = require('./../models/customerSchema');
const { msgFormatConst, respApi } = require('../helpers/helpers');
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

//GET
//para filtrar la información es por medio de query params, 
//porque GET no soporta recibir parametros por body (no soporta el req.body, es req.params)
const getCustomers = async (req, res) => {
  try {
    const Customers = await Customer.find({})
    msgFormatConst('getCustomers');
    respApi(res, 'success', Customers);
  } catch (error) {
    res.status(500).json({ msg: 'Hubo un error obteniendo los datos' })
  }

}
//CREATE
const createCustomer = async (req, res) => {
  //OBTENER USUARIO, EMAIL Y PASSWORD DE LA PETICIÓN POR EL BODY
  const { name, email, password } = req.body

  try {
    //GENERAMOS STRING ALEATORIO PARA USARSE CON EL PASSWORD
    //la 'const salt', es una construcción de numeros y letras aleatorios
    const salt = await bcryptjs.genSalt(10)
    //el metodo .hash encripta la contraseña
    const hashedPassword = await bcryptjs.hash(password, salt)
    //CREAMOS UN USUARIO CON SU PASSWORD ENCRIPTADO
    const Customers = await Customer.create({
      name, email, password: hashedPassword
    })
    // //USUARIO CREADO, VAMOS A CREAR EL JSON WEB TOKEN
    // const payload = {
    //   user: {
    //     id: Customers._id //ID DEL USUARIO QUE QUIERO CREAR
    //   }
    // }
    // //FIRMAR EL JSON WEB TOKEN
    // jwt.sign(
    //   payload,//DATOS QUE SE ACOMPAÑAN EN EL TOKEN
    //   process.env.SECRET,//LLAVE PARA DESCIFRAR LA FIRMA ELECTRONICA DEL TOKEN
    //   {
    //     expiresIn: 360000 //EXPIRACIÓN DEL TOKEN
    //   },
    //   (error, token) => {
    //     //CALLBACK QUE, EN CASO DE QUE EXISTA ERROR, DEVUELVA EL TOKEN
    //     if (error) throw error
    //     res.json({ token })
    //   }
    // )
    // //helpers.js
    msgFormatConst('createCustomers');

  } catch (error) {
    return res.status(400).json({
      msg: error,
    })
  }

}
//VERIFY AUTORIZACION
const verifyCustomer = async (req, res) => {
  try {
    //CONFIRMAMOS QUE EL USUARIO EXISTA EN LA BD Y RETORNAMOS SUS DATOS, EXCLUYENDO EL PASSWORD
    const usuario = await Customer.findById(req.user.id).select('-password')
    res.json({ usuario })
    msgFormatConst('verifyCustomers');
  } catch (error) {
    res.status(500).json({
      msg: 'Hubo un error al verificar el usuario',
      error,
    })
  }
}

//LOGIN
const loginCustomer = async (req, res) => {
  //PEDIMOS ESTOS PARAMETROS POR EL BODY
  const { email, password } = req.body
  try {
    //ENCONTRAMOS UN USUARIO
    let foundUser = await Customer.findOne({ email: email })
    if (!foundUser) {
      //SI NO HUBO UN USUARIO ENCONTRADO, DEVOLVEMOS UN ERROR
      return res.status(400).json({ msg: 'El usuario no existe' })
    }
    //SI TODO ESTA BIEN, HACEMOS LA EVALUACIÓN DE LA CONTRASEÑA ENVIADA CONTRA LA BASE DE DATOS.
    const passRight = await bcryptjs.compare(password, foundUser.password)

    //SI EL USUARIO ES INCORRECTO, REGRESAMOS UN MENSAJE SOBRE ESTO
    if (!passRight) {
      return await res.status(400).json({ msg: 'Contraseña incorrecta' })
    }

    //SI TODO CORRECTO, GENERAMOS UN JSON WEB TOKEN
    //1. DATOS DE ACOMPAÑAMIENTO DEL TOKEN
    const payload = {
      user: {
        id: foundUser.id,
      }
    }
    //2. FIRMA DEL JWT
    if (email && passRight) {
      jwt.sign(payload, process.env.SECRET, { expiresIn: 3600000 }, (error, token) => {
        if (error) throw error
        //SI TODO SUCEDIO CORRECTAMENTE, RETORNAR EL TOKEN
        res.json({ token })
      })
    } else {
      res.json({ msg: 'Hubo un erorr', error })
    }
  }
  catch (error) {
    res.json({ msg: 'Hubo un error al iniciar sesión', error })
  }
}

//UPDATE
const updateCustomer = async (req, res) => {
  //PEDIMOS ESTOS PARAMETROS POR EL BODY
  const { id, name, email } = req.body
  try {
    const updateCustom = await Customer.findByIdAndUpdate(id, { name, email }, { new: true })

    msgFormatConst('updateCustomers');
  } catch (error) {
    res.status(500).json({
      msg: 'Hubo un error actualizando el usuario',
    })
  }


}
//DELETE
const deleteCustomer = async (req, res) => {
  //PEDIMOS EL ID POR EL BODY
  const { id } = req.body
  try {
    const deleteCustom = await Customer.findByIdAndRemove({ _id: id })
    res.json(deleteCustom)

    msgFormatConst('deleteCustomers');
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error borrando el usuario especificado"
    })
  }
}

module.exports = {
  getCustomers,
  createCustomer,
  loginCustomer,
  verifyCustomer,
  updateCustomer,
  deleteCustomer

}