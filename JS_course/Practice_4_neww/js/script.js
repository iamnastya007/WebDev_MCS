console.log('You are at ' + window.location);
const request = document.querySelector('.request');
const popup = document.querySelector('.popup');
request.addEventListener('click', ()=>{
	popup.style.display = 'flex';
})