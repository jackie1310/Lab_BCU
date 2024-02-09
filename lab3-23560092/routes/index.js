var express = require('express');
const calculateDaysUntilNextBirthday = require('../helpers/birthday');
const calculateAge = require('../helpers/age');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
  res.send('Hi');
});

router.get('/books', function(req, res, next) {
  res.send({Category: req.body.category,
    Type: req.body.type});
});

router.get('/login', function(req, res, next) {
  res.render('login', {title: 'Login'});
});

router.post('/login', function(req, res, next) {
  console.log(req.body);
  const date = `${req.body.year}-${req.body.month}-${req.body.date}`;
  const days = calculateDaysUntilNextBirthday(date);
  const age = calculateAge(date);
  res.render('result', {name: req.body.name, days: days, age: age});
});

module.exports = router;