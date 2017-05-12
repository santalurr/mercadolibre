var express = require('express');
var router = express.Router();
var request = require('request');

const apiAddress = 'https://api.mercadolibre.com/';

router.get('/items/:id', function(req, res) {
	request(apiAddress + 'items/' + req.params.id, function (error, response, body) {
		var item = JSON.parse(response.body);

		request(apiAddress + 'items/' + req.params.id + '/description', function (error, response, body) {
			var description = response.body;
			console.log(item.price.toString(), item.condition);

			var itemDetails = setItemDetails(item, description);
		 	res.json(itemDetails);
		});			
	});
});

router.get('/items', function(req, res){
	request(apiAddress + 'sites/MLA/search?q=' + req.query.q, function (error, response, body) {
		var search = JSON.parse(response.body);
		var itemsList = setItemList(search);
	 	res.json(itemsList);
	});
});

function setItemDetails(item, description) {
	return {
		"author": {
			"name": "Santiago",
			"lastname": "Alurralde"
		},
		"item": {
			"id": item.id,
			"title": item.title,
			"price": {
				"currency": item.currency_id,
				"amount": getPriceAmount(item),
				"decimals": getPriceDecimals(item)
			},
			"picture": item.pictures[0].url,
			"condition": getItemCondition(item),
			"free_shipping": item.shipping.free_shipping,
			"sold_quantity": item.sold_quantity,
			"description": description.plain_text
		}
	};
}

function getItemCondition(item) {
	return (item.condition === 'new') ? 'Nuevo' : 'Usado';
}

function getPriceAmount(item) {
	return item.price.toString().split(".")[0];
}

function getPriceDecimals(item) {
	return item.price.toString().split(".")[1];
}

function setItemList(search) {
	var categoriesFilter = search.available_filters.find(function(filter) {
		return filter.id === "category"
	});

	var categories = categoriesFilter.values.map(function(cat) {
		return cat.name;
	});

	var items = [];

	for(let i=0; i<4; i++) {
		let currentItem = search.results[i];

		var itemData = {
	      "id": currentItem.id,
	      "title": currentItem.title,
	      "price": {
			"currency": currentItem.currency_id,
			"amount": getPriceAmount(currentItem),
			"decimals": getPriceDecimals(currentItem)
	      },
	      "picture": currentItem.thumbnail,
	      "condition": getItemCondition(currentItem),
	      "free_shipping": currentItem.shipping.free_shipping,
	      "location": currentItem.address.state_name
		}	

		items.push(itemData);
	}

	return {
		"author": {
			"name": "Santiago",
			"lastname": "Alurralde"
		},
		"categories": categories,
		"items": items
	};
}

module.exports = router;