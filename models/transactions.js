const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionsSchema = new Schema(
    {
        Date: {
            type: String,
            required: true
        },
        Amount: {
            type: [String],
            required: true
        },
        Description: {
            type: String,
            required: true
        },
        Merchant: {
            type: String,
            required: true
        }
    },
    { timestamps: true },
)

const Transactions = mongoose.model('Transactions', transactionsSchema);

module.exports = Transactions;