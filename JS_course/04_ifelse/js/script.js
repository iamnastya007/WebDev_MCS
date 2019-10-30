console.log('You are at ' + window.location);

const Image = document.querySelector('.imageBlock');
let answer = prompt("Сколько тебе лет?");
answer = parseInt(answer);

if (answer<11) {
	Image.style.backgroundImage = "url(img/schenok.jpg)";
} else if (answer<=17) {
	Image.style.backgroundImage = "url(img/podrost.jpg)";
}
console.log(answer);


let modul = prompt("Введите число");
modul = parseInt(modul);
if (modul>=0) {
	console.log(modul);
} else {
	console.log(-modul);
}

let modulT = prompt("Введите число T");
modulT = parseInt(modulT);
(modulT >= 0) ? console.log(modulT) : console.log(-modulT);


