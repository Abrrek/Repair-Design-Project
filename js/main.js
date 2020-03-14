/*document.addEventListener("DOMContentLoaded", function(event) {
	const modal = document.querySelector('.modal');
	const modalBtn = document.querySelectorAll('[data-toggle=modal]');
	const closeBtn = document.querySelector('.modal__close');
	// const closeBtn = document.querySelector('.modal__close');
	const closeModal = document.querySelector('.modal__close-block');
	const switchModal = () => {
		modal.classList.toggle('modal--visible');
	}

	modalBtn.forEach(element => {
		element.addEventListener('click', switchModal);
	});

	closeBtn.addEventListener('click', switchModal);
	closeModal.addEventListener('click', switchModal);
	document.addEventListener('keydown', function (e) {
		if(e.keyCode === 27) {
			modal.classList.remove('modal--visible');
		}
	});
}); */

$(document).ready(function () {
	var modal = $('.modal'),
			modalBtn = $('[data-toggle=modal]'),
			closeBtn = $('.modal__close'),
			closeModal = $('.modal__close-block');

	modalBtn.on('click', function() {
		modal.toggleClass('modal--visible');
	});

	closeBtn.on('click', function() {
		modal.toggleClass('modal--visible');
	});

	closeModal.on('click', function() {
		modal.removeClass('modal--visible');
	});

	$(document).keydown(function(e) {
		if (e.which == 27) {
			modal.removeClass('modal--visible');
		}
});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
				$('#button-up').fadeIn();
		} else {
				$('#button-up').fadeOut();
		}
	});

	$('#button-up').click(function () {
			$('body,html').animate({
					scrollTop: 0
			}, 500);
			return false;
	});
});