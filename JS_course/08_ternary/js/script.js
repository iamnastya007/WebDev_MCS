console.log('You are at ' + window.location);

const Image = document.querySelector('.imageBlock');
let answer = prompt("Сколько тебе лет?");
answer = parseInt(answer);

// if (answer<11) {
// 	Image.style.backgroundImage = "url(img/schenok.jpg)";
// } else if (answer<=17) {
// 	Image.style.backgroundImage = "url(img/podrost.jpg)";
// }
// console.log(answer);


// let modul = prompt("Введите число");
// modul = parseInt(modul);
// if (modul>=0) {
// 	console.log(modul);
// } else {
// 	console.log(-modul);
// }

(answer < 18) ? Image.style.backgroundImage = "url(img/schenok.jpg" : 
	Image.style.backgroundImage = "url(img/podrost.jpg)"