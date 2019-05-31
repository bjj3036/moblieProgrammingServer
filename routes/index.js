var express = require('express');
var router = express.Router();
const Library = require('../models/libraryModel');
const Book = require('../models/bookModel');
const Loan = require('../models/loanModel');
const Hold = require('../models/holdModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
});

module.exports = router;
