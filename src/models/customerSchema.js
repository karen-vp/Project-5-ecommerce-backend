//Modelo de los clientes para MONGO
const mongoose = require('mongoose');

const customerSchema = mongoose.Schema(
    {
        name: { type: String, require: true },
        email: { type: String, require: true },
        password: { type: String, require: true }
    }

)
const Customer = mongoose.model('customer', customerSchema);
module.exports = Customer;