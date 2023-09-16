/**
 * 16/09/2023 by Joicemar S Morais
 */
const slides = document.querySelectorAll(".slide");
//-1 Por causa que o calculo com valor 1 já seria 100%, levaria ao elemento 2.
let maxSlide = slides.length - 1; 

function scroll_left() {
    curSlide--;
    if(curSlide < 0){
        curSlide = maxSlide;
    }
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${100 * (curSlide)}%)`;
    });
}

function scrollRight() {
    curSlide++;
    if(curSlide > maxSlide){
        curSlide = 0;
    }
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${100 * (curSlide)}%)`;
    });
}