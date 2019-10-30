// console.log('You are at ' + window.location);

// const image = document.querySelector('img');
// console.log(image.hasAttribute('alt'));
// image.removeAttribute('alt');
// console.log(image.hasAttribute('alt'));

// console.log(image.getAttribute('src'));
// console.log(image.setAttribute('src', 'img/google.png'));

const Page = document.querySelector('.page');
let colorBg = prompt('1.Какой будет цвет фона?');
Page.style.backgroundColor = colorBg;

let colorTxt = prompt('2.Какой будет текст шрифта?');
Page.style.color = colorTxt;
console.log(colorTxt);

const spanName = document.querySelector('.name'); //ВОТ ТУТ НУЖНА ПОМОЩЬ//
let name = prompt('3.Как зовут человека, который вас вдохновляет?');
console.log(spanName);
spanName.innerText = name;

const image = document.querySelector('img');
console.log(image);
let urlNew = prompt('4.Введите адрес картинки');
image.setAttribute('src', urlNew);

const shortBio = document.querySelector('.shortBio');
let textShortBio = prompt('5.Введите текст страницы');
shortBio.innerText = textShortBio;

shortBio.className += ' animated';
console.log(shortBio);









