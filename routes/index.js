var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Remote Control' });
});

/* GET View page */
router.get('/view', function(req, res, next) {
  res.render('view', { title: 'Remote Control' });
});

/* GET View page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Remote Control' });
});

module.exports = router;
