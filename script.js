'use strict';

const sideMenuElement = document.getElementById('side-menu');
const menuButtronElement = document.getElementById('menu');
const exitMenuButtoElement = document.getElementById('exit');
const navElement = document.getElementById('nav');

menuButtronElement.addEventListener('click', () => {
  sideMenuElement.classList.add('active');
  console.log(1223);
});

exitMenuButtoElement.addEventListener('click', () => {
  sideMenuElement.classList.remove('active');
});

window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    navElement.classList.remove('blured');
  } else {
    navElement.classList.add('blured');
  }
});
