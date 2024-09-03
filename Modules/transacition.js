const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    type: { type: String, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    description: String,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', transactionSchema);