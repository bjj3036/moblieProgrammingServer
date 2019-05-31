var express = require('express');
var router = express.Router();
const Library = require('../models/libraryModel');
const Book = require('../models/bookModel');
const Loan = require('../models/loanModel');
const Hold = require('../models/holdModel');

router.post('/save', function (req, res, next) {
    let book = new Book(req.body)
    book.save(function (err, result) {
        if (err)
            return res.send(err)
        return res.send(result)
    })
});

router.get('/removeAll', function (req, res, next) {
    Book.remove({}, function (err, result) {
        if (err)
            return res.send(err)
        return res.send(result)
    })
});

module.exports = router;
