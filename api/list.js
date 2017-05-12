var utils = require('./utils');

exports.setItemList = function(search) {
	return {
		"author": {
			"name": "Santiago",
			"lastname": "Alurralde"
		},
		"categories": getCategories(search),
		"items": getItems(search)
	};
};

function getCategories(search) {
	var categoriesFilter = search.available_filters.find(function(filter) {
		return filter.id === "category"
	});

	try {
		var categories = categoriesFilter.values.map(function(cat) {
			return cat.name;
		});	

		return categories;	
	} catch(err) {}
}

function getItems(search) {
	var items = [];

	for(let i=0; i<4; i++) {
		let currentItem = search.results[i];

		var itemData = {
	      "id": currentItem.id,
	      "title": currentItem.title,
	      "price": {
			"currency": currentItem.currency_id,
			"amount": utils.getPriceAmount(currentItem),
			"decimals": utils.getPriceDecimals(currentItem)
	      },
	      "picture": currentItem.thumbnail,
	      "condition": utils.getItemCondition(currentItem),
	      "free_shipping": currentItem.shipping.free_shipping,
	      "location": currentItem.address.state_name
		}	

		items.push(itemData);
	}

	return items;
}