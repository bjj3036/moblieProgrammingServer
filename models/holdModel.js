/**
 * @file holdModel.js
 * @brief Mongoose 보유 모델, 도서관이 보유하고 있는 책들
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let holdSchema = new Schema({
    library: {type: Schema.Types.ObjectId, ref: 'Library'},
    book: {type: Schema.Types.ObjectId, ref: 'Book'}
});

module.exports = mongoose.model('Hold', holdSchema);
