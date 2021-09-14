const swiper = new Swiper(".swiper", {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 30,
	grid: {
		rows: 1,
		fill: "row",
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},

	breakpoints: {
		576: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});
