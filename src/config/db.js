//Conexion con la base de datos MONGODB
require('dotenv').config();
const mongoose = require('mongoose');

//esta función es para evitar el error de strictQuery
//para Mongoose 7, ya que no lo usaremos
mongoose.set('strictQuery', false)

const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('\x1b[42m ***************Conexión exitosa a la base de datos***************** \x1b[0m')
    } catch (error) {
        console.log('\x1b[31m ***************Error en la conexión a a la base de datos***************** \x1b[0m')
    }
}

module.exports = {
    dbConnection
}