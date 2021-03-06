var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var User = require('../models/user');
var Post = require('../models/post');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/u/:user',function(req,res,next){
    res.render('');
});

router.get('/reg',function(req,res,next){
    res.render('');
});

router.get('/login',function(req,res,next){
    res.render('');
});

router.get('/logout',function(req,res,next){
    res.render('');
});

module.exports = router;
