const mongoose = require('mongoose');
const User = require('./User');

const orderSchema = new mongoose.Schema({
    orderData: {
        type: Array,
        required:true
    },
    user: {
        type: String,
        required:true,
        unique:true,
        trim:true
    }
});

module.exports = mongoose.model("Order", orderSchema);
