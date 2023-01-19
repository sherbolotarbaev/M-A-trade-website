// burger menu твой OLD
// hamburger = document.querySelector(".hamburger");
//
// hamburger.onclick = function () {
// 	navBar = document.querySelector(".navbar");
// 	navBar.classList.toggle("active");
// };
//
// $(document).ready(function () {
// 	$("#nav-icon3").click(function () {
// 		$(this).toggleClass("open");
// 	});
// });
//
// $(document).ready(function () {
// 	let hamburger = $("#nav-icon3");
// 	let navbar = $(".navbar");
//
// 	navbar.find("a").click(function () {
// 		hamburger.click();
// 	});
// });

// burger menu V2
// $(document).ready(function () {
// 	// Выберите элемент кнопки бургера с помощью его ID
// 	let hamburger = $("#nav-icon");
// 	// Выберите элемент меню с помощью его класса
// 	let navbar = $(".navbar");
//
// 	// Прикрепите обработчик события клика к кнопке бургера
// 	hamburger.on("click", function () {
// 		// Переключить класс "active" у элемента меню
// 		navbar.toggleClass("active");
// 		// Переключить класс "open" у элемента кнопки бургера
// 		hamburger.toggleClass("open");
// 	});
//
// 	// Прикрепите обработчик события клика к ссылкам внутри элемента меню
// 	navbar.find("a").on("click", function () {
// 		// Симулировать клик по кнопке бургера
// 		hamburger.click();
// 	});
// });

// burger menu V3
// Ванильный JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Выбрать элемент кнопки бургера с помощью его ID
  let hamburger = document.getElementById("nav-icon");
  // Выбрать элемент меню с помощью его класса
  let navbar = document.querySelector(".navbar");
  let navLinks = document.querySelectorAll(".nav-links a");

  // Прикрепить обработчик события клика к кнопке бургера
  hamburger.addEventListener("click", function () {
    // Переключить класс "active" у элемента меню
    navbar.classList.toggle("active");
    // Переключить класс "open" у элемента кнопки бургера
    hamburger.classList.toggle("open");
  });

  //  добавляем обработчик события click к каждой ссылке меню
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navbar.classList.remove("active");
      hamburger.classList.remove("open");
    });
  });
});

// search
const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
const clear = document.querySelector(".clear");

icon.onclick = function () {
  search.classList.toggle("active");
};

clear.onclick = function () {
  document.getElementById("searchId").value = "";
};

// slick
$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 750,
        settings: {
          dots: false,
        },
      },
    ],
  });
});

// Animation

document.addEventListener("DOMContentLoaded", () => {
  const homePage = document.querySelector(".home-page");
  const header = document.querySelector(".header");

  const headerFixed = () => {
    let scrollTop = window.scrollY;
    let homePageCenter = homePage.offsetHeight / 2;

    if (scrollTop >= homePageCenter) {
      header.classList.add("fixed");
      homePage.style.marginTop = `${header.offsetHeight}px`;
    } else {
      header.classList.remove("fixed");
      homePage.style.marginTop = `0px`;
    }
  };

  headerFixed();
  window.addEventListener("scroll", () => {
    headerFixed();
  });
});
