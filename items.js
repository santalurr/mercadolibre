var express = require('express');
var router = express.Router();
var request = require('request');

const apiAddress = 'https://api.mercadolibre.com/';

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/items/:id', function(req, res){
	request(apiAddress + 'items/' + req.params.id, function (error, response, body) {
		var item = JSON.parse(response.body);
	 	res.json(item);
	});
});

router.get('/items', function(req, res){
	request(apiAddress + 'sites/MLA/search?q=' + req.query.q, function (error, response, body) {
		var itemsList = JSON.parse(response.body);
	 	res.json(itemsList);
	});
});

module.exports = router;