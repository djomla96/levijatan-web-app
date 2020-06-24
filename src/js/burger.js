const burger = document.querySelector('.burger');
const closeNav = document.querySelector('.nav-close');
const navList = document.querySelector('.nav-list');
burger.addEventListener('click', function() {
    navList.classList.add('show-nav');
})

closeNav.addEventListener('click', function() {
    navList.classList.remove('show-nav');
})