var utils = require('./utils');

exports.setItemDetails = function(item, description) {
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
				"amount": utils.getPriceAmount(item),
				"decimals": utils.getPriceDecimals(item)
			},
			"picture": item.pictures[0].url,
			"condition": utils.getItemCondition(item),
			"free_shipping": item.shipping.free_shipping,
			"sold_quantity": item.sold_quantity,
			"description": description.text,
			"category": item.category_id
		}
	};
};