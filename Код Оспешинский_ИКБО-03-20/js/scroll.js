let object = document.querySelector('.start');
let rot = document.querySelector('.centerImg');
let scTop = window.pageYOffset;

window.onscroll = function () {

	posTop = (object.pageYOffset !== undefined) ? object.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	let currentScroll = posTop > scTop; //true если скролл вниз
	
	if (currentScroll) {
		rot.style.transform = "translate(-50%, -70%) rotate(48deg)";
	}
	else {
		rot.style.transform = "translate(-50%, -20%) rotate(-132deg)";
	}
	
	if (posTop > object.offsetHeight / 1.8 && posTop < object.offsetHeight * 4.4) {
		rot.style.opacity = "1";
	}
	else {
		rot.style.opacity = "0";
	}

	scTop = posTop;
}
