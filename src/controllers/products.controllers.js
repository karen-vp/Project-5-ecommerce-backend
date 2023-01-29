const Product = require('./../models/productSchema');
const { msgFormatConst, respApi  } = require('../helpers/helpers');

//GET 
const getProducts = async (req, res) => {
    try {
        const Products = await Product.find({})
        msgFormatConst('getProducts');
        res.json({Products})
    } catch (error) {
        res.status(500).json({ msg: 'Hubo un error obteniendo los datos' })
    }
}

//CREATE
const createProducts = async (req, res) => {
    const { name, brand, price, description, img } = req.body
    try {
        const newProduct = await Product.create({ name, brand, price, description, img })
        msgFormatConst('createProducts');
        res.json({ newProduct })
    } catch (error) {
        res.status(500).json({ msg: 'Hubo un error creando los datos' })
    }
}

//UPDATE
const updateProducts = async (req, res) => {
    const { id, name, brand, price, description, img } = req.body
    try {
        const putProduct = await Product.findByIdAndUpdate(id, { name, brand, price, description, img }, { new: true })
        msgFormatConst('updateProducts');
        res.json({ putProduct })
    } catch (error) {
        res.status(500).json({ msg: 'Hubo un error actualizando los datos' })
    }
}

//DELETE

const deleteProducts = async (req, res) => {
    const { id } = req.body
    try {
        const removeProduct = await Product.findByIdAndRemove({ _id: id })
        msgFormatConst('deleteProducts');
        res.json({ removeProduct })
    } catch (error) {
        res.status(500).json({ msg: 'Hubo un error borrando los datos' })
    }
}

module.exports = {
    getProducts,
    createProducts,
    updateProducts,
    deleteProducts
}