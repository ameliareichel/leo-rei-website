const hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.main-navigation-container');

const unfoldMenu = () => {
    hamburger.classList.toggle('spin');
    menu.classList.toggle('unfolded');
};

hamburger.addEventListener('click', unfoldMenu);  