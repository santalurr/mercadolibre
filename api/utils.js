exports.getItemCondition = function(item) {
	return (item.condition === 'new') ? 'Nuevo' : 'Usado';
};

exports.getPriceAmount =  function(item) {
	return item.price.toString().split(".")[0];
};

exports.getPriceDecimals =  function(item) {
	return item.price.toString().split(".")[1];
};