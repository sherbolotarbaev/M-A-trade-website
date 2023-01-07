// burger menu
hamburger = document.querySelector(".hamburger");

hamburger.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

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
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    centerMode: true,

    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  });
});
