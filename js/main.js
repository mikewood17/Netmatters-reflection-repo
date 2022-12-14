// =================================
// Main Javascript
// =================================

// slideout menu

const menu_btn = document.querySelector('.hamburger');
const slide_menu = document.querySelector('.side-menu')
const main = document.querySelector('.main');

function openMenu() {
    slide_menu.style.display = "block";
    main.style.marginRight = "300px";
}

function closeMenu() {
    slide_menu.style.display = "none";
    main.style.marginRight = "0px";
}

menu_btn.addEventListener('click', function() {
    if (slide_menu.style.display = 'none') {
        openMenu();
    } else {
        closeMenu();
    }
})