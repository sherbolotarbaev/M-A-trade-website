// burger menu
hamburger = document.querySelector(".hamburger");

hamburger.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

$(document).ready(function () {
  $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
    $(this).toggleClass("open");
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
