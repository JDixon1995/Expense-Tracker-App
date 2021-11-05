const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
        type: 'string',
        trim: true,
        required: [true, 'Please add text']
    },
    amount: {
        type: 'number',
        required: [true, 'Please add amount']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);