/**
 * @file libraryModel.js
 * @brief Mongoose 도서관 모델
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let librarySchema = new Schema({
    libraryName: {type: String, required: true},
    location: {type: String, required: true},
    closedDay: {type: String, required: true},
    libraryImage: String,
    books: [{type: Schema.Types.ObjectId, ref: 'Hold'}] // 보유하고 있는 책들
});

module.exports = mongoose.model('Library', librarySchema);
