/* Anish Mistry */

var express = require('express');
var router = express.Router();

/* home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Food Tracker Application' });
});

/* food list page*/
router.get('/foodlist', function(req, res, next) {
  res.render('foodList', { title: 'Food Tracker Application: List of Food.' });
});

module.exports = router;
