var express = require('express');
var router = express.Router();
const Library = require('../models/libraryModel');
const Book = require('../models/bookModel');
const Loan = require('../models/loanModel');
const Hold = require('../models/holdModel');

router.post('/save', function(req, res, next) {
    let library = new Library(req.body)
    library.save(function(err, result){
        if(err)
            return res.send(err)
        return res.send(result)
    })
});

module.exports = router;
