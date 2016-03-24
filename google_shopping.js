var data = require("./products.json")

var count = 0; 

for (var i = 0; i <data['items'].length; i++) {
	if (data.['i'].items.product.inventories[0].availability === 'backorder') {
	console.log(data.items[i].product.title);	
	}
}
