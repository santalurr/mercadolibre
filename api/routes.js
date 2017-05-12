var express = require('express');
var router = express.Router();
var request = require('request');
var itemCtrl = require('./item');
var listCtrl = require('./list');

const apiAddress = 'https://api.mercadolibre.com/';

router.get('/items/:id', function(req, res) {
	request(apiAddress + 'items/' + req.params.id, function (error, response, body) {
		var item = JSON.parse(response.body);

		request(apiAddress + 'items/' + req.params.id + '/description', function (error, response, body) {
			var itemDetails = itemCtrl.setItemDetails(item, JSON.parse(response.body));
		 	res.json(itemDetails);
		});			
	});
});

router.get('/categories/:id', function(req, res) {
	request(apiAddress + 'categories/' + req.params.id, function (error, response, body) {
		var categories = JSON.parse(response.body);
		res.json(categories);
	});
});

router.get('/items', function(req, res){
	request(apiAddress + 'sites/MLA/search?q=' + req.query.q, function (error, response, body) {
		var itemsList = listCtrl.setItemList(JSON.parse(response.body));
	 	res.json(itemsList);
	});
});

module.exports = router;