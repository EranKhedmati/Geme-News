// Slider
let sliderImg = document.getElementById('sliderImg');

// Get images 
let sliderImages = ["../src/slider\ imgae\ 1.jpg", "../src/slider\ imgae\ 2.jpg", "../src/slider\ imgae\ 3.jpg"];
let sliderSelector = 0;

// Go next & pervious
let nextSliderBtn = document.getElementById('nextSlide');

let perviousSliderBtn = document.getElementById('perviousSlide');

nextSliderBtn.addEventListener('click', nextSlide)

perviousSliderBtn.addEventListener('click', () => {
    sliderSelector--;
    if (sliderSelector < 0) {
        sliderSelector = sliderImages.length - 1;
    }
    sliderImg.src = sliderImages[sliderSelector];
})

// Set auto chagne

function nextSlide() {
    sliderSelector++;
    if (sliderSelector > sliderImages.length - 1) {
        sliderSelector = 0;
    }
    sliderImg.src = sliderImages[sliderSelector];
}

let setAutoSlider = setInterval(nextSlide, 4000);

// Stop when hover of slider

let slider = document.querySelector('.slider');
slider.addEventListener('mouseover', () => {
    clearInterval(setAutoSlider)
})

slider.addEventListener('mouseout',()=>{
    setAutoSlider = setInterval(nextSlide,4000)
})