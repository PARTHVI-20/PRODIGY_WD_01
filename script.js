let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
let header= document.querySelector('header');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    header.classList.add(scrolled);
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
}
document.addEventListener('scroll', ()=>
{
    if(window.scrollY >0)
        {
            header.classList.add("scrolled");
        } 
        else
        {
            header.classList.remove("scrolled");
        }
})
var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



