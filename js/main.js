// =================================
// Main Javascript
// =================================

const body = document.getElementsByTagName('body');
const backgroundFade = document.querySelector('.cookie-consent');

// slideout menu

const menu_btn = document.querySelector('.hamburger');
const slide_menu = document.querySelector('.side-menu')
const main = document.querySelector('.main');
const mainHeader = document.querySelector(".main-header");

function openMenu() {
    slide_menu.style.display = "block";
    main.style.marginRight = "300px";
    mainHeader.style.marginRight = "300px";
    backgroundFade.style.display = 'block';
    main.classList.toggle('menu-open');
    body[0].style.overflow = 'hidden';
}

function closeMenu() {
    slide_menu.style.display = "none";
    main.style.marginRight = "0px";
    mainHeader.style.marginRight = "0px";
    backgroundFade.style.display = 'none';
    main.classList.toggle('menu-open');
    body[0].style.overflow = 'scroll';
}

menu_btn.addEventListener('click', function() {
    if (slide_menu.style.display === 'block') {
        closeMenu();
    } else {
        openMenu();
    }
})

backgroundFade.addEventListener('click', function(){
    if (slide_menu.style.display === 'block') {
        closeMenu();
    }
})


// sticky header

// window.onscroll = function() {stickyHeader()};

// const header = document.getElementsByClassName("main-header");

// const sticky = header.offsetTop;

// function stickyHeader() {
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//       } else {
//         header.classList.remove("sticky");
//       }
// }

// owl carousel

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();  
  });

  var owl = $('.owl-carousel');
    owl.owlCarousel({
    items:9,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    autoWidth: true
});

// cookie popup

const cookieButton = document.querySelector('.cookie-button');
const cookiePopup = document.querySelector('.cookie-popup');

function cookieGet(){
    cookiePopup.style.display = 'none';
    backgroundFade.style.display = 'none';
    localStorage.setItem('cookies', 'accepted');
    body[0].style.overflow = 'scroll';
}

if (localStorage.getItem('cookies')){
    cookiePopup.style.display = 'none';
    backgroundFade.style.display = 'none';
} else {
    cookiePopup.style.display = 'grid';
    backgroundFade.style.display = 'block';
    body[0].style.overflow = 'hidden';
}

cookieButton.addEventListener('click', cookieGet);



