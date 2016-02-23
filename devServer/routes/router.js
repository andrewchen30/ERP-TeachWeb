var express = require('express');
var router  = express.Router();

var request = require('request');
var list    = require('../../list.js');
var db      = require('../data/index.js');
var file    = require('../feature/fs.js');
var queryString = require('../feature/queryString.js');

var data = require('../data');

// console.log('data', data.vedio);

router.get('/vedio', (req, res, next) => {
  res.render('vedio', { data : data.vedio });
});

router.get('/ppts', (req, res, next) => {
  res.render('ppts', { data : data.ppts });
});

router.get('/ppts2', (req, res, next) => {
  res.render('ppts2', { data : data.ppts2 });
});

router.get('/flash', (req, res, next) => {
  res.render('flash');
});

router.get('/room/', (req, res, next) => {
	res.render('room', {
		vedio : data.vedio,
		ppts : data.ppts.concat(data.ppts2),
	});
});

router.get('/room/:id', (req, res, next) => {
	res.render('room', {
		vedio : data.vedio,
		ppts : data.ppts.concat(data.ppts2),
	});
});


router.get('/:page', (req, res, next) => {
	console.log('use /:page');
  res.render(req.params.page.replace(/.html/, ''));
});



module.exports = router;
