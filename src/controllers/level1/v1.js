const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.send('Get /');
  return next();
});
router.post('/', function (req, res, next) {
  res.send('Post /');
  return next();
});

module.exports = router;
