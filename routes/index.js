var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cisco Light Conservation' });
});

/* GET View page */
router.get('/view', function(req, res, next) {
  res.render('view', { title: 'Cisco Light Conservation' });
});

/* GET View page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Cisco Light Conservation' });
});

module.exports = router;
