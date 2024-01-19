AOS.init({
	duration: 800,
	easing: "slide",
});

(function ($) {
	"use strict";

	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (
				isMobile.Android() ||
				isMobile.BlackBerry() ||
				isMobile.iOS() ||
				isMobile.Opera() ||
				isMobile.Windows()
			);
		},
	};

	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: "scroll",
	});

	var fullHeight = function () {
		$(".js-fullheight").css("height", $(window).height());
		$(window).resize(function () {
			$(".js-fullheight").css("height", $(window).height());
		});
	};
	fullHeight();

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($("#ftco-loader").length > 0) {
				$("#ftco-loader").removeClass("show");
			}
		}, 1);
	};
	loader();

	// Scrollax
	$.Scrollax();

	var carousel = function () {
		$(".home-slider").owlCarousel({
			loop: true,
			autoplay: true,
			margin: 0,
			animateOut: "fadeOut",
			animateIn: "fadeIn",
			nav: true,
			autoplayHoverPause: true,
			items: 1,
			navText: [
				"<span class='fa-solid fa-arrow-left'></span>",
				"<span class='fa-solid fa-arrow-right'></span>",
			],
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,
				},
				1000: {
					items: 1,
				},
			},
		});

		$(".carousel-testimony").owlCarousel({
			center: true,
			loop: false,
			items: 1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: [
				'<span class="ion-ios-arrow-back">',
				'<span class="ion-ios-arrow-forward">',
			],
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 3,
				},
				1000: {
					items: 3,
				},
			},
		});
	};
	carousel();

	$("nav .dropdown").hover(
		function () {
			var $this = $(this);
			// 	 timer;
			// clearTimeout(timer);
			$this.addClass("show");
			$this.find("> a").attr("aria-expanded", true);
			// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
			$this.find(".dropdown-menu").addClass("show");
		},
		function () {
			var $this = $(this);
			// timer;
			// timer = setTimeout(function(){
			$this.removeClass("show");
			$this.find("> a").attr("aria-expanded", false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find(".dropdown-menu").removeClass("show");
			// }, 100);
		}
	);

	$("#dropdown04").on("show.bs.dropdown", function () {
		console.log("show");
	});

	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $(".ftco_navbar"),
				sd = $(".js-scroll-wrap");

			if (st > 150) {
				if (!navbar.hasClass("scrolled")) {
					navbar.addClass("scrolled");
				}
			}
			if (st < 150) {
				if (navbar.hasClass("scrolled")) {
					navbar.removeClass("scrolled sleep");
				}
			}
			if (st > 350) {
				if (!navbar.hasClass("awake")) {
					navbar.addClass("awake");
				}

				if (sd.length > 0) {
					sd.addClass("sleep");
				}
			}
			if (st < 350) {
				if (navbar.hasClass("awake")) {
					navbar.removeClass("awake");
					navbar.addClass("sleep");
				}
				if (sd.length > 0) {
					sd.removeClass("sleep");
				}
			}
		});
	};
	scrollWindow();

	var counter = function () {
		$("#section-counter").waypoint(
			function (direction) {
				if (
					direction === "down" &&
					!$(this.element).hasClass("ftco-animated")
				) {
					var comma_separator_number_step =
						$.animateNumber.numberStepFactories.separator(",");
					$(".number").each(function () {
						var $this = $(this),
							num = $this.data("number");
						console.log(num);
						$this.animateNumber(
							{
								number: num,
								numberStep: comma_separator_number_step,
							},
							7000
						);
					});
				}
			},
			{ offset: "95%" }
		);
	};
	counter();

	var contentWayPoint = function () {
		var i = 0;
		$(".ftco-animate").waypoint(
			function (direction) {
				if (
					direction === "down" &&
					!$(this.element).hasClass("ftco-animated")
				) {
					i++;

					$(this.element).addClass("item-animate");
					setTimeout(function () {
						$("body .ftco-animate.item-animate").each(function (k) {
							var el = $(this);
							setTimeout(
								function () {
									var effect = el.data("animate-effect");
									if (effect === "fadeIn") {
										el.addClass("fadeIn ftco-animated");
									} else if (effect === "fadeInLeft") {
										el.addClass("fadeInLeft ftco-animated");
									} else if (effect === "fadeInRight") {
										el.addClass("fadeInRight ftco-animated");
									} else {
										el.addClass("fadeInUp ftco-animated");
									}
									el.removeClass("item-animate");
								},
								k * 50,
								"easeInOutExpo"
							);
						});
					}, 100);
				}
			},
			{ offset: "95%" }
		);
	};
	contentWayPoint();

	// navigation
	var OnePageNav = function () {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on(
			"click",
			function (e) {
				e.preventDefault();

				var hash = this.hash,
					navToggler = $(".navbar-toggler");
				$("html, body").animate(
					{
						scrollTop: $(hash).offset().top,
					},
					700,
					"easeInOutExpo",
					function () {
						window.location.hash = hash;
					}
				);

				if (navToggler.is(":visible")) {
					navToggler.click();
				}
			}
		);
		$("body").on("activate.bs.scrollspy", function () {
			console.log("nice");
		});
	};
	OnePageNav();

	// magnific popup
	$(".image-popup").magnificPopup({
		type: "image",
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true,
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
		},
	});

	$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
		disableOn: 700,
		type: "iframe",
		mainClass: "mfp-fade",
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false,
	});

	var goHere = function () {
		$(".mouse-icon").on("click", function (event) {
			event.preventDefault();

			$("html,body").animate(
				{
					scrollTop: $(".goto-here").offset().top,
				},
				500,
				"easeInOutExpo"
			);

			return false;
		});
	};
	goHere();
})(jQuery);

/**
 * ! Basket to hold all the selected items
 * ? the getItem part is retrieving data from the local storage
 * ? if local storage is blank, basket becomes an empty array
 */

let shop = document.getElementById("shop");

/**
 * ! Basket to hold all the selected items
 * ? the getItem part is retrieving data from the local storage
 * ? if local storage is blank, basket becomes an empty array
 */

let basket = JSON.parse(localStorage.getItem("data")) || [];

/**
 * ! Generates the shop with product cards composed of
 * ! images, title, price, buttons, description
 */

let generateShop = () => {
	return (shop.innerHTML = shopItemsData
		.map((x) => {
			let { id, name, desc, img, price } = x;
			let search = basket.find((y) => y.id === id) || [];
			return `
    <div id=product-id-${id} class="item">
      <img width="220" src=${img} alt="">
      <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
          <h2>$ ${price} </h2>
          <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">${
				search.item === undefined ? 0 : search.item
			}</div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
  </div>
    `;
		})
		.join(""));
};

generateShop();

/**
 * ! used to increase the selected product item quantity by 1
 */

let increment = (id) => {
	let selectedItem = id;
	let search = basket.find((x) => x.id === selectedItem.id);

	if (search === undefined) {
		basket.push({
			id: selectedItem.id,
			item: 1,
		});
	} else {
		search.item += 1;
	}

	console.log(basket);
	update(selectedItem.id);
	localStorage.setItem("data", JSON.stringify(basket));
};

/**
 * ! used to decrease the selected product item quantity by 1
 */

let decrement = (id) => {
	let selectedItem = id;
	let search = basket.find((x) => x.id === selectedItem.id);

	if (search === undefined) return;
	else if (search.item === 0) return;
	else {
		search.item -= 1;
	}

	update(selectedItem.id);
	basket = basket.filter((x) => x.item !== 0);
	console.log(basket);
	localStorage.setItem("data", JSON.stringify(basket));
};

/**
 * ! To update the digits of picked items on each item card
 */

let update = (id) => {
	let search = basket.find((x) => x.id === id);
	document.getElementById(id).innerHTML = search.item;
	calculation();
};

/**
 * ! To calculate total amount of selected Items
 */

let calculation = () => {
	let cartIcon = document.getElementById("cartAmount");
	cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
