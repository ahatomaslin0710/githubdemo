var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  return res.status(200).json({success: true});
});

module.exports = router;
