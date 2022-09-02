let navMain = document.querySelector('.main-navigation');
let mainToggle = document.querySelector('.main-header__toggle');

console.log(navMain)

navMain.classList.remove('main-navigation--nojs');

mainToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');
    }
  mainToggle.classList.toggle('main-header__toggle--active');
  });
