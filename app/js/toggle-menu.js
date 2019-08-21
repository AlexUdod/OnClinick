'use strict';
(function () {
  var toggleMenu = document.querySelector('.header__toggle');
  var header = document.querySelector('.header');
  var headerNav = document.querySelector('.header__nav');
  var headerSearch = document.querySelector('.header__search');
  var headerSign = document.querySelector('.header__sign');
  var headerLogo = document.querySelector('.heade__logo');
  var headerTel = document.querySelector('.header__tel');
  var telNumber = document.querySelector('.header__tel-number');
  var headerInfo = document.querySelector('.header__info');
  var headerSign = document.querySelector('.header__sign');

  var toggleCategory = document.querySelector('.gynecology');
  var gynecologyList = document.querySelector('.gynecology__list');

  toggleMenu.addEventListener('click', function() {
    this.classList.toggle('header__toggle--opened');
    header.classList.toggle('header--toggle');
    headerNav.classList.toggle('visually-hidden');
    headerLogo.classList.toggle('visually-hidden');
    headerSearch.classList.toggle('visually-hidden');
    headerTel.classList.toggle('visually-hidden');
    headerInfo.classList.toggle('visually-hidden');
    headerSign.classList.toggle('header__sign--toggle');
    telNumber.classList.toggle('visually-hidden');
  });

  toggleCategory.addEventListener('click', function() {
    this.classList.toggle('main-categories__item--open');
    gynecologyList.classList.toggle('visually-hidden');
  });


})();
