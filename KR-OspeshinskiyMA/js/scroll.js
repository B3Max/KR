let object = document.querySelector('.start');
let rot = document.querySelector('.centerImg');

let way = 60, // кол-во пройденных пикселей
	deg = 10;

let scTop = window.pageYOffset;

window.onscroll = function () {

	posTop = (object.pageYOffset !== undefined) ? object.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	let currentScroll = posTop > scTop; //true если скролл вниз
	if (posTop > object.offsetHeight / 2) {
		let s = $(this).scrollTop() - object.offsetHeight / 2;
		let res = +(s / way * deg);
		rot.style.transform = `translate(-50%, -50%) rotate(${res}deg)`;
	}

	if (posTop < object.offsetHeight / 10) {
		rot.style.opacity = "0";
		rot
	.style.opacity = "0";
	}

	if (posTop > object.offsetHeight / 1.8 && posTop < object.offsetHeight * 2.6) {
		rot
	.style.opacity = "1";
	}

	if (currentScroll) {
		rot
	.style.transform = "translate(-50%, -70%) rotate(48deg)";
	}
	else {
		rot
	.style.transform = "translate(-50%, -20%) rotate(-132deg)";
	}

	let sc = 1;
	if (posTop >= object.offsetHeight * 4.4 && posTop >= object.offsetHeight * 4.5) {
		if (currentScroll) {
			rot
		.style.opacity = "0";
		}
		else {
			rot
		.style.opacity = "1";
		}
	}

	if (posTop >= object.offsetHeight / 2.2 && posTop <= object.offsetHeight / 1.8) {
		if (currentScroll) {
			rot
		.style.opacity = "1";

		}
		else {
			rot
		.style.opacity = "0";
		}

	}
	scTop = posTop;
}