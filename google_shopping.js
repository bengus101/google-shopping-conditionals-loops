var data = require("./products.json")

var count = 0; 

// for (var i = 0; i <data['items'].length; i++) {
// 	if (data.items[i].kind === 'shopping#product') {
// 		count++;	
// 	}
// }

// console.log(count);

// for (var i = 0; i < data['items'].length; i++) {
// 	if (data.items[i].product.inventories[0].availability === 'backorder') {
// 		count++;
// 		console.log(data.items[i].product.title);
// 	}
// }

// console.log(count);

for (var i = 0; i < data['items'].length; i++) {
	if (data.items[i].product.images.length>1) {
		count++
		console.log(data.items[i].product.title);
	}
}

console.log(count);

// for (var i = 0; i <data['items'].length; i++) {
// 	if (data.['i'].items.product.inventories[0].availability === 'backorder') {
// 	console.log(data.items[i].product.title);	
// 	}
// }

// for (var i = 0; i <data['items'].length; i++) {
// 	if (data.['i'].items.product.images[0].link === >1) {
// 	console.log(data.items[i].product.images.link);	
// 	}
// }





