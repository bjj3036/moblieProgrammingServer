/**
 * @file userModel.js
 * @brief Mongoose 사용자 모델
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    id: {type: String, unique: true, required: true},
    password: String,
    name: String,
});

module.exports = mongoose.model('User', userSchema);
