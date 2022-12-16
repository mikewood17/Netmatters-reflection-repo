// =================================
// Main Javascript
// =================================

// slideout menu

const menu_btn = document.querySelector('.hamburger');
const slide_menu = document.querySelector('.side-menu')
const main = document.querySelector('.main');
const mainHeader = document.querySelector(".main-header");

function openMenu() {
    slide_menu.style.display = "block";
    main.style.marginRight = "300px";
    mainHeader.style.marginRight = "300px";
}

function closeMenu() {
    slide_menu.style.display = "none";
    main.style.marginRight = "0px";
    mainHeader.style.marginRight = "0px";
}

menu_btn.addEventListener('click', function() {
    if (slide_menu.style.display === 'block') {
        closeMenu();
    } else {
        openMenu();
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

window.addEventListener("load", function(){
    this.setTimeout(
        function open(event){
            document.querySelector(".cookie-popup").style.display = "block";
        },
        1000
    )
});

cookieButton.addEventListener("click", function(){
    document.querySelector(".cookie-popup").style.display = "none";
});

document.querySelector('#close').addEventListener
("click", function(){
    document.querySelector(".cookie-popup").style.display = "none";
});

