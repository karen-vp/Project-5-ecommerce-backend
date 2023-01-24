//constantes para requerir las funciones de las librerias
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')

//middlewares
app.use(bodyParser.json());
app.use(cors());

//Llamamos la Funcion para conectar a la base de datos
const { dbConnection } = require('./config/db')
dbConnection();

//Función para levantar el servidor
app.listen(process.env.PORT, () => {
    console.log('\x1b[34m ******************************************* \x1b[0m');
    console.log('\x1b[34m **********Se levanto la API ' + process.env.PORT + '***********\x1b[0m')
    console.log('\x1b[34m ******************************************* \x1b[0m');
})

//localhost:5000
app.get('/', (req, res) => {
    res.send('Hola mundo');
})

//Collections
//localhost:5000/customers
app.use('/customers', require('../src/routers/customers.routers'));

//localhost:5000/products
app.use('/products', require('../src/routers/products.routers'))

