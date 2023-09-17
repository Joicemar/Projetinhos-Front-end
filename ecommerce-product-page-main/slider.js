/**
 * 17/09/2023 by Joicemar S Morais
 */
const slides = document.querySelectorAll(".slide");
const light_slides = document.querySelectorAll(".light_slide");
//-1 Por causa que o calculo com valor 1 já seria 100%, levaria ao elemento 2.
let maxSlide = slides.length - 1;

/**
 * Change the slide and lightbox slide
 */
function scroll_left() {
    curSlide--;
    if (curSlide < 0) {
        curSlide = maxSlide;
    }
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${100 * (curSlide)}%)`;
    });
    light_slides.forEach(function (light_slide) {
        light_slide.style.transform = `translateX(-${100 * (curSlide)}%)`;
    });
    changeImgOption();
}
/**
 * Change the slide and lightbox slide
 */
function scrollRight() {
    curSlide++;
    if (curSlide > maxSlide) {
        curSlide = 0;
    }
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${100 * (curSlide)}%)`;
    });
    light_slides.forEach(function (light_slide) {
        light_slide.style.transform = `translateX(-${100 * (curSlide)}%)`;
    });
    changeImgOption();
}
/**Change the effect of the image option in lightbox*/
function changeImgOption() {

    let img_option = document.querySelectorAll('.lightbox .img_option');
    let normal_img_option = document.querySelectorAll('.img_option');
    
    img_option.forEach(element => {
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        }
    });
    normal_img_option.forEach(element => {
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        }
    });

    img_option[curSlide].classList.add('active');
    normal_img_option[curSlide].classList.add('active');

    for(index = 0; index <= img_option.length; index++){
        if(img_option[index].classList.contains('active')){
            normal_img_option[index].classList.add('active');
        }
    }
}