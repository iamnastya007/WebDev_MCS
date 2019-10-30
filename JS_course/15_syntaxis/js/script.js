window.addEventListener('load', function(){
	const button = document.querySelector('.button');
	const ball = document.querySelector('.ball');
	const showp = document.querySelector('.show p');
	button.addEventListener('click',()=>{
		ball.style.animationPlayState = 'running';
	})

	window.onscroll = function() {
		if (window.scrollY >= 1000) {
			showp.style.opacity = 1;
			} else showp.style.opacity = .5;
	}

})