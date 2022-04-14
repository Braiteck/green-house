$(() => {
	// Ширина окна для ресайза
	WW = $(window).width()


	// Основной слайдер на главной
	if ($('.interior_slider .swiper').length) {
		new Swiper('.interior_slider .swiper', {
			loop: true,
			spaceBetween: 20,
			slidesPerView: 1,
			watchOverflow: true,
			watchSlidesProgress: true,
			loopAdditionalSlides: 1,
			pagination: {
				el: '.slider-pagination',
				type: 'fraction',
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			on: {
				init: function () {
					setTimeout(() => {
						observer.observe()
					}, 200)
				}
			},
			breakpoints: {
				'320': {
					spaceBetween: 20
				},
				'480': {
					spaceBetween: 30
				},
				'768': {
					spaceBetween: 40
				},
				'1025': {
					spaceBetween: 63
				}
			}
		})
	}
})



$(window).on('resize', () => {
	if (typeof WW !== 'undefined' && WW != $(window).width()) {
		// Моб. версия
		if (!firstResize) {
			$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1')
			if ($(window).width() < 360) $('meta[name=viewport]').attr('content', 'width=360, user-scalable=no')

			firstResize = true
		} else {
			firstResize = false
		}


		// Перезапись ширины окна
		WW = $(window).width()
	}
})