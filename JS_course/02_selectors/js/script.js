console.log('You are at ' + window.location);


const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('myClass');
const byId = document.getElementById('myId');

console.log(byTag, byClass, byId);

const allBySelector = document.querySelectorAll('.coolClass.mine');
console.log(allBySelector);

const firstBySelector = document.querySelector('div');
console.log(firstBySelector);

const quest = prompt('Что хотите написать на странице?')

byId.innerHTML = quest
firstBySelector.innerHTML = "<h2>Hello i am div2</h2>"