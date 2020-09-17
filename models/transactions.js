const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Transactions = new Schema(
    {
        Date: { type: String, required: true },
        Amount: { type: [String], required: true },
        Description: { type: String, required: true },
        Merchant: { type: String, required: true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('Transactions', Transactions);