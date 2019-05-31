/**
 * @file bookModels.js
 * @brief Mongoose 책 모델
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookSchema = new Schema({
    bookName: String,
    author: String,
    publisher: String,
    bookImage: String
});

module.exports = mongoose.model('Book', bookSchema);
