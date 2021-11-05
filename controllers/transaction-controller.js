// @desc Get all transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = (req, res, next) => {
    res.send('GET transactions.');
}

//Add Transaction
exports.addTransaction = (req, res, next) => {
    res.send('POST transaction');
}

//Delete Transaction/:id
exports.deleteTransaction = (req, res, next) => {
    res.send('DELETE transaction');
}