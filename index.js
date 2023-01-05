hamburger = document.querySelector(".hamburger");

hamburger.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
const clear = document.querySelector(".clear");

icon.onclick = function () {
  search.classList.toggle("active");
};

clear.onclick = function () {
  document.getElementById("searchId").value = "";
};
