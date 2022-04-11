const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
   navMenu.classList.toggle('expanded');
})