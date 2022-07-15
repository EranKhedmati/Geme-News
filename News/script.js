// Slider
let sliderImages = ['../src/slider imgae 1.jpg', '../src/slider imgae 2.jpg', '../src/slider imgae 3.jpg'];
let sliderSelector = 0;

let sliderContent = document.getElementById('sliderContent');

let perviousSlider = document.getElementById('perviousSlider');
let nextSlider = document.getElementById('nextSlider');

nextSlider.addEventListener('click', () => {
    sliderSelector++;
    if (sliderSelector > sliderImages.length - 1) {
        sliderSelector = 0;
    }
    sliderContent.src = sliderImages[sliderSelector];
})

perviousSlider.addEventListener('click', () => {
    sliderSelector--;
    if (sliderSelector < 0) {
        sliderSelector = sliderImages.length - 1;
    }
    sliderContent.src = sliderImages[sliderSelector];
})

function autoChangeSlider() {
    sliderSelector++;
    if (sliderSelector > sliderImages.length - 1) {
        sliderSelector = 0;
    }
    sliderContent.src = sliderImages[sliderSelector];
}

// const setChangeSlider = setInterval(autoChangeSlider, 3000);

sliderContent.src = sliderImages[sliderSelector];