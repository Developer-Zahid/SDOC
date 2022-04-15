$(function () {
	"use strict";

	//  Bootstrap forms validation
	window.addEventListener(
		"load",
		function () {
			// Fetch all the forms we want to apply custom Bootstrap validation styles to
			var forms = document.getElementsByClassName("needs-validation");
			// Loop over them and prevent submission
			var validation = Array.prototype.filter.call(forms, function (form) {
				form.addEventListener(
					"submit",
					function (event) {
						if (form.checkValidity() === false) {
							event.preventDefault();
							event.stopPropagation();
						}
						form.classList.add("was-validated");
					},
					false,
				);
			});
		},
		false,
	);

	//  Fixed Header
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > 50) {
			$(".header").addClass("header--fixed");
		} else {
			$(".header").removeClass("header--fixed");
		}
	});

	// scroll top
	$(".scroll-top").on("click", function () {
		$("html,body").animate(
			{
				scrollTop: 0,
			},
			50,
		);
	});
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > 200) {
			$(".scroll-top").fadeIn();
		} else {
			$(".scroll-top").fadeOut();
		}
	});

	// Closes responsive menu when a scroll link is clicked
	$(".nav-link, .navbar__btn-wrapper .primary-btn").on("click", function () {
		$(".navbar-collapse").collapse("hide");
	});

	//  Banner slider
	$(".timeline__slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 500,
		arrows: true,
		prevArrow: '<span class="slick__arrows slick__arrows--left d-inline-flex align-items-center justify-content-center rounded-circle"><svg class="slick__arrows__icon" version="1.1" fill="currentColor" width="30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve"><path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712L143.492,221.863z"/></svg></span>',
		nextArrow: '<span class="slick__arrows slick__arrows--right d-inline-flex align-items-center justify-content-center rounded-circle"><svg fill="currentColor" width="30" version="1.1" class="slick__arrows__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve"><path d="M336.226,209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132,0.42c-6.388,6.614-6.388,17.099,0,23.712l192.734,192.734L107.294,414.391c-6.663,6.664-6.663,17.468,0,24.132c6.665,6.663,17.468,6.663,24.132,0l204.8-204.8C342.889,227.058,342.889,216.255,336.226,209.591z"/></svg></span>',
		dots: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		infinite: true,
		centerMode: true,
		centerPadding: "0px",
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					centerMode: false,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					centerMode: false,
				},
			},
		],
	});

	// veno box
	$(".venobox").venobox({
		bgcolor: "#4eaaf3",
		spinner: "three-bounce",
		border: "1px",
	});
});
