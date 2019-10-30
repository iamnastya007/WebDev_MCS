deneg = prompt('Сколько у вас денег?');
yablok = prompt('Сколько вы купили яблок?');
baton = prompt('Сколько вы купили батонов хлеба?');
yablokprice = prompt('Сколько стоит одно яблоко?');
// yabloksum = parseFloat(yabloksum) * parseFloat(yablok);
batonprice = prompt('Сколько стоит один батон хлеба?');
// batonsum = parseFloat(batonprice)*parseFloat(baton);
// allneed=yabloksum+batonsum;
// ifok=allneed<=parseFloat(deneg);

parseFloat(deneg);
parseFloat(yablok);
parseFloat(baton);
parseFloat(yablokprice);


// let myText = (element, text) => {
// 	element.innerHTML = text;
// }

// myText (document.body, 'Привет');

let haveEnough = (elem1, elem2, elem3, elem4, elem5) => {
	elem4 = elem4 * elem2;
	elem5 = elem5 * elem3;
	if ((elem4 + elem5) <= elem1) {
		console.log('Deneg hvatit');
	} else console.log('Deneg NE hvatit');
}
haveEnough (deneg, yablok, baton, yablokprice, batonprice);


