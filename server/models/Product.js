const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: String,
    name: String,
    stock: Number,
    price: Number,
    category: String
}, {
    collection: "products"
});

module.exports = mongoose.model('Product', productSchema);