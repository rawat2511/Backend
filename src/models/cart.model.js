const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    name: String,
    quantity: String,
    image: String,
    mrp: Number,
    discount: Number,
    sp: Number,
    form: String,
    numberOfItems: {type: Number, default:1},
    uses: [{type: String}]
})

const Cart = mongoose.model("cart", CartSchema);

module.exports = Cart;