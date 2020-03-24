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

	var mySwiper1 = new Swiper ('.swiper-container-s1', {
		loop: true,
		pagination: {
			el: '.swiper-pagination-1',
			type: 'bullets',
		},
		navigation: {
			nextEl: '.swiper-button-next-1',
			prevEl: '.swiper-button-prev-1',
		},
		spaceBetween: 15,
	});

	const mySwiper2 = new Swiper ('.swiper-container-s2', {
		loop: true,
		pagination: {
			el: '.swiper-pagination-2',
			type: 'bullets',
		},
		navigation: {
			nextEl: '.swiper-button-next-2',
			prevEl: '.swiper-button-prev-2',
		},
		spaceBetween: 15,
	});
	var counter = 1;
	$(".right__promo").click(function() {
		var index = $(this).index();
		mySwiper2[0].slideTo(index+1, 600);
		mySwiper2[1].slideTo(index+1, 600);
		counter = index + 1;
		console.log(counter);
	});
	$(".swiper-button-next-2").click( function() {
		counter += 1;
		if (counter == 7) {
			counter = 1;
			promoChanger();
		}
		else {
			promoChanger();
		}
	});
	$(".swiper-button-prev-2").click( function() {
		counter -= 1;
		if (counter == 0) {
			counter = 6;
			promoChanger();
		}
		else {
			promoChanger();
		}
	});

	function promoChanger() {
		if (counter == 1) {
			$(".right__promo").css("opacity", 0.3);
			$(".right__promo:eq(0)").css("opacity", 1);
		}
		if (counter == 2) {
			$(".right__promo").css("opacity", 0.3);
			$(".right__promo:eq(1)").css("opacity", 1);
		}
		if (counter == 3) {
			$(".right__promo").css("opacity", 0.3);
			$(".right__promo:eq(2)").css("opacity", 1);
		}
		if (counter == 4) {
			$(".right__promo").css("opacity", 0.3);
			$(".right__promo:eq(3)").css("opacity", 1);
		}
		if (counter == 5) {
			$(".right__promo").css("opacity", 0.3);
			$(".right__promo:eq(4)").css("opacity", 1);
		}
		if (counter == 6) {
			$(".right__promo").css("opacity", 0.3);
			$(".right__promo:eq(5)").css("opacity", 1);
		}
	}

	$(".right--slide-first").click( function() {
		$(".right__promo").css("opacity", 0.3)
		$(this).css("opacity", 1);
	})
	$(".right--slide-second").click( function() {
		$(".right__promo").css("opacity", 0.3)
		$(this).css("opacity", 1);
	})
	$(".right--slide-third").click( function() {
		$(".right__promo").css("opacity", 0.3)
		$(this).css("opacity", 1);
	})
	$(".right--slide-fourth").click( function() {
		$(".right__promo").css("opacity", 0.3)
		$(this).css("opacity", 1);
	})
	$(".right--slide-fifth").click( function() {
		$(".right__promo").css("opacity", 0.3)
		$(this).css("opacity", 1);
	})
	$(".right--slide-sixth").click( function() {
		$(".right__promo").css("opacity", 0.3)
		$(this).css("opacity", 1);
	})
	
	var  next1 = $('.swiper-button-next-1');
	var  prev1 = $('.swiper-button-prev-1');
	var  bullets1 = $('.swiper-pagination-1');
	var  next2 = $('.swiper-button-next-2');
	var  prev2 = $('.swiper-button-prev-2');
	var  bullets2 = $('.swiper-pagination-2');

	next1.css('left', prev1.width() + bullets1.width() + 20)
	bullets1.css('left', prev1.width() + 10)

	next2.css('left', prev2.width() + bullets2.width() + 20)
	bullets2.css('left', prev2.width() + 10)

	$('.projects__section-title__heading--wow').css('opacity', 0);
	$('.control__section-title--woww').css('opacity', 0);
	$('.types__heading--woww').css('opacity', 0);
	$('.types__row--woww').css('opacity', 0);
	$('.design_heading--woww').css('opacity', 0);
	$('.design--row--woww').css('opacity', 0);
	$('.left__howwework--woww').css('opacity', 0);
	$(window).scroll(function () {
		if ($(this).scrollTop() > $('.projects__section-title__heading--wow').offset().top - $(this).height()*4/5) {
				$('.projects__section-title__heading--wow').css('animation', 'fadeInUp-1 2s ease');
				$('.projects__section-title__heading--wow').css('opacity', 1);
		}
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > $('.control__section-title--woww').offset().top - $(this).height()*4/5) {
				$('.control__section-title--woww').css('animation', 'fadeInUp-1 2s ease');
				$('.control__section-title--woww').css('opacity', 1);
		}
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > $('.types__heading--woww').offset().top - $(this).height()*4/5) {
				$('.types__heading--woww').css('animation', 'fadeInUp-1 2s ease');
				$('.types__heading--woww').css('opacity', 1);
		}
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > $('.types__row--woww').offset().top - $(this).height()*4/5) {
				$('.types__row--woww').css('animation', 'fadeInUp-1 2s ease');
				$('.types__row--woww').css('opacity', 1);
		}
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > $('.design_heading--woww').offset().top - $(this).height()*4/5) {
				$('.design_heading--woww').css('animation', 'fadeInUp-1 2s ease');
				$('.design_heading--woww').css('opacity', 1);
		}
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > $('.design--row--woww').offset().top - $(this).height()*4/5) {
				$('.design--row--woww').css('animation', 'fadeInUp-1 2s ease');
				$('.design--row--woww').css('opacity', 1);
		}
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > $('.left__howwework--woww').offset().top - $(this).height()*4/5) {
				$('.left__howwework--woww').css('animation', 'fadeInUp-1 2s ease');
				$('.left__howwework--woww').css('opacity', 1);
		}
	});

	new WOW().init();

	$('.modal__form').validate({
		errorElement: "div",
		errorClass:"invalid",
		rules: {
			// simple rule, converted to {required:true}
			userName: {
				required: true,
				minlength: 2,
				maxlength: 15,
			},
			userPhone: "required",
			// compound rule
			userEmail: {
				required: true,
				email: true
			},
			policyCheckbox: {
				required: true
			}
		},
		messages: {
			userName: {
				required: "Имя обязательно",
				minlength: "Имя не короче 2-х букв",
				maxlength: "Имя не длиннее 15-ти букв"
			},
			userPhone: "Телефон обязателен",
			userEmail: {
				required: "Заполните поле",
				email: "Введите корректный email"
			},
			policyCheckbox: "Необходимо принять пользовательские соглашения"
		}
	});

	$('.control__form').validate({
		errorClass:"invalid",
		rules: {
			// simple rule, converted to {required:true}
			userName: {
				required: true,
				minlength: 2,
				maxlength: 15,
			},
			userPhone: "required",
			// compound rule
			policyCheckbox: {
				required: true
			}
		},
		messages: {
			userName: {
				required: "Имя обязательно",
				minlength: "Имя не короче 2-х букв",
				maxlength: "Имя не длиннее 15-ти букв"
			},
			userPhone: "Телефон обязателен",
			policyCheckbox: "Необходимо принять пользовательские соглашения"
		}
	});

	$('.footer__form').validate({
		errorClass:"invalid",
		rules: {
			// simple rule, converted to {required:true}
			userName: {
				required: true,
				minlength: 2,
				maxlength: 15,
			},
			userPhone: "required",
			// compound rule
			userQuestion: "required",
			policyCheckbox: {
				required: true
			}
		},
		messages: {
			userName: {
				required: "Имя обязательно",
				minlength: "Имя не короче 2-х букв",
				maxlength: "Имя не длиннее 15-ти букв"
			},
			userPhone: "Телефон обязателен",
			userQuestion: "Укажите свой вопрос",
			policyCheckbox: "Необходимо принять пользовательские соглашения"
		}
	});

	$('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});

	ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.754986, 37.573185],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
				}),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
					hintContent: 'Вот мы',
					balloonContent: 'Да-да, это мы :)'
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: '../img/qwer.png',
					// Размеры метки.
					iconImageSize: [42, 42],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-5, -38]
			});

		myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects
        .add(myPlacemark);
	});
	});