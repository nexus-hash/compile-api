var express = require('express');
var router = express.Router();

const compile = require("./compile")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/compile',function(req,res,next){
  compile(req,res);
})

module.exports = router;
