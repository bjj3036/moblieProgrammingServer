/**
 * @file loanModel.js
 * @brief Mongoose 대출 모델
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let loanSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'}, //빌린 사람
    book: {type: Schema.Types.ObjectId, ref: 'Hold'}, //빌린 책
    term: Number
});

module.exports = mongoose.model('Loan', loanSchema);
