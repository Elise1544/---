const menu = document.querySelector(".header__menu");
const section = document.querySelector(".sections");
const about = document.querySelector(".about-us");

menu.addEventListener('click', function (evt) {
  if (menu.classList.contains('header__menu--closed')) {
    evt.preventDefault();
    menu.classList.remove('header__menu--closed');
    section.classList.add('sections--mobile');
    about.classList.add('about-us--mobile');
  } else {
    evt.preventDefault();
    menu.classList.add('header__menu--closed');
    section.classList.remove('sections--mobile');
    about.classList.remove('about-us--mobile');
  }
});

