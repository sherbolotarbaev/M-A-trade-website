// Burger menu
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
const clear = document.querySelector(".clear");

clear.onclick = function () {
  document.getElementById("searchId").value = "";
};

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

  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("element-show");
      }
    });
  }

  let options = {
    threshold: [0.5],
  };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(".anim");

  for (let elm of elements) {
    observer.observe(elm);
  }
});

