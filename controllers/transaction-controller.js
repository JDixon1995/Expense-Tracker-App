const Transaction = require('../models/Transaction');

// @desc Get all transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            date: transactions
        })
    } catch (err) {
        return res.sendStatus(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

//Add Transaction
exports.addTransaction = async (req, res, next) => {
    res.send('POST transaction');
}

//Delete Transaction/:id
exports.deleteTransaction = async (req, res, next) => {
    res.send('DELETE transaction');
}